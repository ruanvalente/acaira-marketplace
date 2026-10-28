import { createClient } from "@/lib/supabase/server";
import { createClient as createBrowserClient } from "@/lib/supabase/client";
import { validateAvatarFile } from "../schemas/profile.schemas";

const BUCKET_NAME = "veropreco/avatar/profile";

export async function uploadAvatar(file: File, userId: string): Promise<{
  success: boolean;
  avatarPath?: string;
  error?: string;
}> {
  try {
    const validationError = validateAvatarFile(file);
    if (validationError) {
      return { success: false, error: validationError };
    }

    const supabase = await createClient();
    const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const filePath = `${userId}/avatar.${fileExt}`;

    // Remove existing avatar if any
    try {
      const { data: existingFiles } = await supabase.storage
        .from(BUCKET_NAME)
        .list(userId);

      if (existingFiles && existingFiles.length > 0) {
        const filesToRemove = existingFiles.map((f) => `${userId}/${f.name}`);
        await supabase.storage.from(BUCKET_NAME).remove(filesToRemove);
      }
    } catch (error) {
      // Continue with upload even if cleanup fails
      console.error("Error cleaning up old avatar:", error);
    }

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error("Error uploading avatar:", error);
      return { success: false, error: "Não foi possível fazer upload da imagem." };
    }

    return { success: true, avatarPath: data.path };
  } catch (error) {
    console.error("Error uploading avatar:", error);
    return { success: false, error: "Não foi possível fazer upload da imagem." };
  }
}

export async function removeAvatar(userId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    
    const { data: existingFiles } = await supabase.storage
      .from(BUCKET_NAME)
      .list(userId);

    if (existingFiles && existingFiles.length > 0) {
      const filesToRemove = existingFiles.map((f) => `${userId}/${f.name}`);
      const { error } = await supabase.storage.from(BUCKET_NAME).remove(filesToRemove);

      if (error) {
        console.error("Error removing avatar:", error);
        return { success: false, error: "Não foi possível remover a imagem." };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error removing avatar:", error);
    return { success: false, error: "Não foi possível remover a imagem." };
  }
}

export async function getAvatarUrl(avatarPath: string | null): Promise<string | null> {
  if (!avatarPath) return null;
  
  try {
    const supabase = await createClient();
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(avatarPath);
    return data.publicUrl;
  } catch (error) {
    console.error("Error getting avatar URL:", error);
    return null;
  }
}

// Client-side version for uploads from browser
export async function uploadAvatarClient(file: File, userId: string): Promise<{
  success: boolean;
  avatarPath?: string;
  error?: string;
}> {
  try {
    const validationError = validateAvatarFile(file);
    if (validationError) {
      return { success: false, error: validationError };
    }

    const supabase = createBrowserClient();
    const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const filePath = `${userId}/avatar.${fileExt}`;

    // Remove existing avatar if any
    try {
      const { data: existingFiles } = await supabase.storage
        .from(BUCKET_NAME)
        .list(userId);

      if (existingFiles && existingFiles.length > 0) {
        const filesToRemove = existingFiles.map((f) => `${userId}/${f.name}`);
        await supabase.storage.from(BUCKET_NAME).remove(filesToRemove);
      }
    } catch (error) {
      console.error("Error cleaning up old avatar:", error);
    }

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error("Error uploading avatar:", error);
      return { success: false, error: "Não foi possível fazer upload da imagem." };
    }

    return { success: true, avatarPath: data.path };
  } catch (error) {
    console.error("Error uploading avatar:", error);
    return { success: false, error: "Não foi possível fazer upload da imagem." };
  }
}
