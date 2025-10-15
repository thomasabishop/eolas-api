## Deployment

Deployment is automated via Forgejo action. See `.forgejo` directory.

Deployment actions are always executed by the `deploy` user on the VPS.

On pushes to `main`:

- Bump version depending on commit keyword, create Git tag (if necessary) and
  automatically update [package.json](./package.json):

- This updates the version in `package.json` and creates Git tag at this version.

- Install `rsync` on the `ubuntu-latest` runner

- `rysnc` over SSH to copy changed files from this repository to VPS deployment directory, excluding`.env`.

- Restart eolas-api using `systemd`. See `/systemd/eolas-api.service` for copy
  of file that runs service on VPS.

### Commit keywords

In accordance with SemVer:

- Major: `major: <commit description>`,
- Minor: `feat: <commit description>`,
- Patch: `fix: <commit description>`

Ignored keywords: `chore`, `test`, `refactor`, and anything else.

### `systemd` service

On the VPS, `eolas-api` runs as a `systemd` service. This service is restarted as part of
the deployment. See copy of this file at
[systemd/eolas-api.service](./systemd/eolas-api.service).

## API

### Entries

#### Get all entries

Return all entries. Optionally limit by length and/or date.

```
GET /entries?limit=2&sort=date
```

```json
{
  "count": 5,
  "data": [
    {
      "title": "SSH",
      "last_modified": "2025-07-10 14:26:04"
    },
    {
      "title": "List_largest_files_bash",
      "last_modified": "2025-07-07 16:49:12"
    }
  ]
}
```

#### Get specific entry

```
GET /entries/Memory_versus_processor
```

```json
{
  "title": "Memory_versus_processor",
  "last_modified": "2024-10-18 19:17:01",
  "size": 270,
  "body": "# Memory versus processor\n\n Would a more powerful processor with average or reduced memory capacity..."
}
```

#### Get backlinks for an entry

Defaults to alphabetic list.

```
GET /entries/backlinks/The_kernel
```

```json
{
  "count": 3,
  "data": ["Boot_process", "Containerization", "CPU_architecture"]
}
```

#### Get outlinks for an entry

Defaults to alphabetic list.

```
GET /entries/outlinks/The_kernel
```

```json
{
  "count": 3,
  "data": ["Basic_model_of_the_operating_system", "Processes", "User_Space"]
}
```

#### Get entries associated with a specified tag

Optionally sort chronologically.

```
GET /entries/tag/memory?sort=date
```

```json
{
  "count": 3,
  "data": [
    {
      "entry_title": "Memory_addresses"
    },
    {
      "entry_title": "Call_stack"
    },
    {
      "entry_title": "The_memory_hierarchy"
    }
  ]
}
```

### Tags

#### Get all tags

Sorted alphabetically.

```
GET /tags
```

```json
{
  "count": 119,
  "data": ["algebra", "algorithms", "analogue", "android", "..."]
}
```

#### Get tags for specified entry

```
GET /tags/The_kernel
```

```json
{
  "count": 4,
  "data": [
    "computer-architecture",
    "memory",
    "operating-systems",
    "systems-programming"
  ]
}
```
