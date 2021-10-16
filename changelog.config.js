// https://github.com/streamich/git-cz

const angularStyle = {
    feat: {
      description: "A new feature",
      emoji: "📝",
      value: "feat",
    },

    build: {
      description:
        "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
      emoji: "👷",
      value: "build",
    },
    ci: {
      description:
        "Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)",
      emoji: "🤖",
      value: "ci",
    },
    docs: {
      description: "Documentation only changes",
      emoji: "📝",
      value: "docs",
    },
    fix: {
      description: "A bug fix",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug nor adds a feature",
      emoji: "♻️",
      value: "refactor",
    },
    test: {
      description: "A code change that neither fixes a bug nor adds a feature",
      emoji: "✅",
      value: "test",
    },

    // ---
    customValue1: {
      description: "customValue1 & customValue1",
      emoji: "🎉",
      value: "customValue1",
    },
    // ---
  };

  module.exports = {
    disableEmoji: false,
    format: `{emoji}{type}{scope}: {subject}`,
    list: Object.keys(angularStyle),
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: [
      "type",
      // "scope",
      "subject",
      "body",
      "breaking",
      "issues",
    ],
    scopes: [],
    types: angularStyle,
  };
