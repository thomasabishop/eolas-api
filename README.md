TBC

| HTTP Method | Path            | Parameter     | Returns                          |
| ----------- | --------------- | ------------- | -------------------------------- |
| GET         | `entry`         | `entry_title` | Body text, tags, title           |
| GET         | `tag`           | `tag_name`    | List of entries for supplied tag |
| GET         | `refs`          | `entry_title` | List of linked entries           |
| GET         | `full_metadata` | `entry_title` | Tags, links, last modified       |
| GET         | `graph`         | `null`        | Full network graph               |

## Deployment

Deployment is automated via Forgejo action (see `.forgejo/workflows/deploy.yml`).

On pushes to `main`:

- Automatically bump version in accordance with Semver:

  - Major: `major: <commit description>`,
  - Minor: `feat: <commit description>`,
  - Patch: `fix: <commit description>`
  - Ignored keywords: `chore`, `test`, `refactor`, and anything else

- SSH to VPS using `deploy` user and :
  - Purge existing source files at `var/www/eolas-api`,
  - Copy over new source files
  - TODO: restart Node server
