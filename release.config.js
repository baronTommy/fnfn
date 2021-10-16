module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "build", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "feat", release: "patch" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "test", release: "patch" },

          // ----
          { type: "customValue1", release: "minor" },
          // ----
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        // preset: "conventionalcommits",
        // presetConfig: {
        //   types: [
        //     { type: "customValue1", section: "Bug Fixes", hidden: false },
        //     { type: "fix", section: "Bug Fixes", hidden: false },
        //   ],
        // },

        "writerOpts": {
          "types": [
            {
              "type": "feat",
              "section": ":sparkles: Novidades",
              "hidden": false
            },
            {
              "type": "fix",
              "section": ":bug: Correções",
              "hidden": false
            },
            {
              "type": "docs",
              "section": ":memo: Documentação",
              "hidden": false
            },
            {
              "type": "style",
              "section": ":barber: Estilização",
              "hidden": false
            },
            {
              "type": "refactor",
              "section": ":zap: Refatoração",
              "hidden": false
            },
            {
              "type": "perf",
              "section": ":fast_forward: Refatoração",
              "hidden": false
            },
            {
              "type": "test",
              "section": ":white_check_mark: Testes",
              "hidden": false
            },
            {
              "type": "chore",
              "hidden": true
            }
          ]
        }
      },

      
    ],
    "@semantic-release/github",
  ],
};

