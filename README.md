| HTTP Method | Path            | Parameter     | Returns                          |
| ----------- | --------------- | ------------- | -------------------------------- |
| GET         | `entry`         | `entry_title` | Body text, tags, title           |
| GET         | `tag`           | `tag_name`    | List of entries for supplied tag |
| GET         | `refs`          | `entry_title` | List of linked entries           |
| GET         | `full_metadata` | `entry_title` | Tags, links, last modified       |
| GET         | `graph`         | `null`        | Full network graph               |
