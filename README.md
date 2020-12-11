<div align="center">
  <h1>github-watch-org</h1>
  <strong>CLI tool to watch repos of an org for you</strong>
</div>

<hr>

# Authentication

First before anything else you need to be authenticated to GitHub so the CLI can modify things for you. There are multiple ways to authenticate:

- Use a `GITHUB_TOKEN` environment variable with a token from GitHub.
- Login through the CLI.

Once authenticated you can use the rest of the feature of the CLI.

# Usage

- `gwo check <orgName>`: This command displays the list of the org repos and whether you're watching them or not.
- `gwo watch <orgName>`: This command watches all repositories within that org.
- `gwo --help`: This command displays the list of commands available.
