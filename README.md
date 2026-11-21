# eolas-api

API for my technical knowledge base.

### Related projects

#### [eolas-db](<>)

#### [eolas-api](<>)

#### [eolas-app](<>)

## Local development

```sh
npm install
npm run start
```

This will start the local server at `http://localhost:3001`. It will look for
stub database at `/data/eolas.db`.


## API

### Search

```
GET /search/<search_term>
```

```json

{
  "count": 2,
  "data": [
    {
      "entry": "Test_values_in_Bash",
      "excerpt": "# <mark>Test</mark> values in Bash\n\n`<mark>test</mark>` is a built-in command that is used to compare values or determine whether\nsomething is the case.\n\nWe..."
    },
    {
      "entry": "Testing_Python_code",
      "excerpt": "...for a module called `lorem`, it will detzect the unit <mark>test</mark>\n  files `lorem_<mark>test</mark>.py` and `<mark>test</mark>_lorem.py`.\n- In order to detect tests..."
    },
```

### Diagnostics

#### Get broken links

```
GET /diagnostics/broken-links
```

```json
{
  "count": 1,
  "data": [
    {
      "source_entry_title": "Reducing_fractions",
      "broken_link_title": "Equivalent%20fractions"
    }
  ]
}
```

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
