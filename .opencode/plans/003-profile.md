## 1. Objetivo

Criar o perfil público e privado do usuário associado à conta autenticada, fornecendo os dados necessários para identificação do vendedor e evolução futura do marketplace.

## 2. Escopo

- Criação/atualização de perfil.
- Nome de exibição.
- Avatar.
- Localização.
- Informações básicas do vendedor.
- Visualização de perfil.
- Estado online/offline quando aplicável.
- Integração com Auth.
- Storage para avatar.
- RLS.

## 3. Não-objetivos

- Sistema completo de reputação.
- Avaliações.
- Verificação de identidade.
- Pagamentos.
- Dados empresariais avançados.
- Chat completo.

## 4. Arquitetura

```text
features/profile/
├── components/
├── hooks/
├── services/
├── schemas/
├── types/
├── utils/
└── tests/
```

O módulo `profile` é responsável por dados de domínio do usuário, enquanto `auth` permanece responsável por credenciais e sessão.

## 5. Modelo de dados

Tabela conceitual:

```text
profiles
├── id
├── display_name
├── avatar_url
├── location
├── created_at
└── updated_at
```

`profiles.id` deve estar relacionado ao usuário autenticado.

A estrutura final deve seguir `docs/architecture/supabase.md` e as migrations existentes.

## 6. Storage

Bucket para avatar/perfil conforme convenção do projeto.

Regras:

- Usuário só pode modificar seus próprios arquivos.
- Validar tipo e tamanho.
- Evitar nomes de arquivos previsíveis.
- Remover/substituir arquivo antigo quando apropriado.
- Não confiar apenas na extensão.

## 7. UI

### Meu perfil

- Avatar.
- Nome.
- Localização.
- Ações de editar/salvar.
- Feedback de atualização.

### Perfil público

- Avatar.
- Nome.
- Localização.
- Estado online/offline quando suportado.
- Informações públicas relevantes.

Seguir hierarquia e tokens de `DESIGN.md`.

## 8. Estados

- Perfil inexistente/inicialização.
- Carregando.
- Editando.
- Salvando.
- Upload de avatar.
- Upload concluído.
- Erro de upload.
- Erro de atualização.
- Perfil público não encontrado.

## 9. Segurança

- RLS para leitura/escrita.
- Usuário só altera seu próprio perfil.
- Definir explicitamente quais campos são públicos.
- Não expor dados internos do usuário.
- Validar payload no servidor.
- Validar uploads.
- Evitar URLs de Storage inadequadamente abertas.

## 10. Testes

- Criação de perfil.
- Atualização própria.
- Bloqueio de atualização de outro usuário.
- Validação de campos.
- Upload de avatar.
- Rejeição de arquivo inválido.
- Renderização pública.
- Estados de loading/error.
- Acessibilidade.

## 11. Critérios de aceitação

- [ ] Perfil é associado corretamente ao usuário autenticado.
- [ ] Usuário consegue editar os campos permitidos.
- [ ] Usuário consegue atualizar avatar.
- [ ] Perfil público exibe somente dados permitidos.
- [ ] RLS impede alterações indevidas.
- [ ] Upload possui validação.
- [ ] Estados de UI estão completos.
- [ ] Testes passam.
- [ ] Typecheck/lint/build passam.

## 12. Dependências

- `001-foundation`
- `002-auth`

## 13. Ordem de implementação

1. Migration/schema.
2. RLS.
3. Storage.
4. Services.
5. Schemas.
6. UI.
7. Integração Auth.
8. Tests.
9. Security review.
