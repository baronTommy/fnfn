module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "hoge", release: "minor" }
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features", hidden: false },
            { type: "fix", section: "Bug Fixes", hidden: false },
            { type: "perf", section: "Performance Improvements", hidden: false },
            { type: "revert", section: "Reverts", hidden: false },
            { type: "docs", section: "Documentation", hidden: false },
            { type: "style", section: "Styles", hidden: false },
            { type: "chore", section: "Miscellaneous Chores", hidden: false },
            { type: "refactor", section: "Code Refactoring", hidden: false },
            { type: "test", section: "Tests", hidden: false },
            { type: "build", section: "Build System", hidden: false },
            { type: "ci", section: "Continuous Integration", hidden: false },
            // https://stackoverflow.com/questions/59066245/semantic-release-add-more-sections-to-auto-generated-release-notes
            { type: "hoge", section: "Improvement", hidden: false },
            { type: "*", section: "---", hidden: false },
          ],
        },
      },
    ],
    "@semantic-release/github",
  ],
};


// ノートキーワード
// メジャー, マイナー, パッチ





// module.exports = {
//   branches: ["master"],
//   plugins: [
//     [
//       "@semantic-release/commit-analyzer",
//       {
//         // https://github.com/arvinxx/gitmoji-commit-workflow
//         // parserOpts: {
//         //   headerPattern:
//         //     /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
//         //   headerCorrespondence: ["type", "scope", "subject", "ticket"],
//         //   noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
//         // },

//         preset: "conventionalcommits",
//         releaseRules: [
//           // {
//           //   breaking: true,
//           //   release: "major",
//           // },
//           // { type: "Breaking", release: "major" },
//           // { type: "New", release: "minor" },
//           // { type: "new", release: "minor" },
//           // { type: "Fix", release: "patch" },
//           // { type: "Update", release: "patch" },
//           // {
//           //   release: "patch",
//           // },

//           { type: "Foo", release: "major" },

//         ],
//       },
//     ],
//     // [
//     //   "@semantic-release/release-notes-generator",
//     //   {
//     //     preset: "conventionalcommits",
//     //     // presetConfig: {
//     //     //   types: [
//     //     //     {
//     //     //       type: "Update",
//     //     //       section: ":sparkles: Novidades",
//     //     //       hidden: false,
//     //     //     },
//     //     //     {
//     //     //       type: "New",
//     //     //       section: ":sparkles: Novidades",
//     //     //       hidden: false,
//     //     //     },
//     //     //     {
//     //     //       type: "Fix",
//     //     //       section: ":bug: Correções",
//     //     //       hidden: false,
//     //     //     },
//     //     //   ],
//     //     // },
//     //   },
//     // ],
//     "@semantic-release/github",
//   ],
// };

// https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser#conventionalcommitsparseroptions
// https://github.com/semantic-release/release-notes-generator/issues/153#issuecomment-555152563
// https://github.com/semantic-release/release-notes-generator/issues/165
