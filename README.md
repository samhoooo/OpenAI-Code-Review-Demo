# OpenAI Code Review Demo

A simple demo on using OpenAI for code review

## Getting started

1. Add your OpenAI API key to .env in the root directory
```
OPENAI_API_KEY=<YOUR_API_KEY>
```

2. Copy file `./pre-commit` to .git/hooks directory.
3. Add executable permissions to the file using the command:
```
chmod 777 pre-commit
```
4. Try to make a commit. ChatGPT is now reviewing all your staged files!
