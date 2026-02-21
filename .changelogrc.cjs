module.exports = {
  types: [
    { type: 'feat', section: '🚀 Features' },
    { type: 'fix', section: '🐛 Bug Fixes' },
    { type: 'a11y', section: '♿ Accessibility' },
    { type: 'docs', section: '📚 Documentation' },
    { type: 'style', section: '🎨 Styling' },
    { type: 'refactor', section: '♻️ Refactoring' },
    { type: 'perf', section: '⚡ Performance' },
    { type: 'test', section: '🧪 Tests' },
    { type: 'chore', section: '🔧 Maintenance' },
  ],
  commitPartial: `*{{#if scope}} **{{scope}}:**
{{~/if}} {{#if subject}}
  {{~subject}}
{{~else}}
  {{~header}}
{{~/if}}

{{~!-- commit link --}} {{#if @root.linkReferences~}}
  ([{{hash}}](
  {{~#if @root.repository}}
    {{~#if @root.host}}
      {{~@root.host}}/
    {{~/if}}
    {{~#if @root.owner}}
      {{~@root.owner}}/
    {{~/if}}
    {{~@root.repository}}
  {{~else}}
    {{~@root.repoUrl}}
  {{~/if}}/
  {{~@root.commit}}/{{hash}}))
{{~else}}
  {{~hash}}
{{~/if}}

{{~!-- author --}}{{#if committer}} by {{committer.name}}{{/if}}
`,
}
