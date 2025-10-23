---
title: Cohera CLI Reference
description: The refernce for the cohera cli tool
---

You can use the Cohera CLI to initialize, manage, build, run and deploy your cohera porject.

# Installation
This is how you intsall the cohera cli

# Commands
## `cohera init`
Initialize a project in a folder. You can choose from templates: blank, basic, showcase

**Usage:**
```bash
npm create cohera
```

**Flags:**
- `--template` - Specify a template (blank, basic, showcase)

**Examples:**
```bash
# Initialize with interactive template selection
npm create cohera my-project

# Initialize with a specific template
npm create cohera my-project -- --template=basic

# Initialize in current directory
npm create cohera .
```

## `cohera module add`
Add a module to the project.

**Usage:**
```bash
cohera module add <module-name>
```

**Flags:**
- `--dev` - Add module as development dependency
- `--force` - Force installation even if conflicts exist
:::note
flags are by copilot, not sure if they make sense for us
:::

**Examples:**
```bash
# Add a specific module
cohera module add chat

# Add multiple modules
cohera module add user-profiles calendar posts
```

## `cohera module remove`
Remove a module from the project.

**Usage:**
```bash
cohera module remove <module-name>
```

**Flags:**
- `--keep-data` - Remove module but preserve data files
- `--force` - Force removal without confirmation
:::note
flags are by copilot, not sure if they make sense for us
:::

**Examples:**
```bash
# Add a specific module
cohera module remove chat

# Add multiple modules
cohera module remove user-profiles calendar posts
```


## `cohera module eject`
Eject a module to customize its source code. After this you own the source code and are responsible that the module keeps working in combination with other modules that rely on it.

**Usage:**
```bash
cohera module eject <module-name>
```

**Flags:**
- `--no-confirm` - Skip confirmation prompt
:::note
flags are by copilot, not sure if they make sense for us
:::

**Examples:**
```bash
# Eject the auth module for customization
cohera module eject chat

# Eject multiple modules
cohera module eject user-profiles calendar posts
```
