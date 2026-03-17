"use client";

import hljs from "highlight.js/lib/common";
import * as React from "react";
import { createHighlighter, type Highlighter } from "shiki";

export interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
}

const SHIKI_THEME = "nord";
const SHIKI_LANG_OVERRIDES: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  jsx: "tsx",
  tsx: "tsx",
};

function normalizeLanguage(lang: string) {
  if (!lang) return "plaintext";
  const lower = lang.toLowerCase();
  return SHIKI_LANG_OVERRIDES[lower] ?? lower;
}

export function CodeEditor({
  value,
  onChange,
  language,
  className = "",
  placeholder = "",
  readOnly = false,
}: CodeEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [detectedLanguage, setDetectedLanguage] = React.useState<string>(
    normalizeLanguage(language ?? ""),
  );
  const [highlighted, setHighlighted] = React.useState<string>("");
  const [highlighter, setHighlighter] = React.useState<Highlighter | null>(
    null,
  );

  React.useEffect(() => {
    createHighlighter({
      themes: [SHIKI_THEME],
      langs: [
        "javascript",
        "typescript",
        "python",
        "rust",
        "go",
        "java",
        "csharp",
        "plaintext",
      ],
    }).then(setHighlighter);
  }, []);

  React.useEffect(() => {
    if (!highlighter) return;

    const code = value || "";
    const lang = language
      ? normalizeLanguage(language)
      : normalizeLanguage(hljs.highlightAuto(code).language || "plaintext");

    setDetectedLanguage(lang);
    setHighlighted(
      highlighter.codeToHtml(code, {
        lang,
        theme: SHIKI_THEME,
      }),
    );
  }, [highlighter, value, language]);

  React.useEffect(() => {
    if (!textareaRef.current) return;
    // Keep cursor at end when value updates externally
    const { selectionStart } = textareaRef.current;
    if (selectionStart === value.length) {
      textareaRef.current.selectionEnd = value.length;
    }
  }, [value]);

  return (
    <div
      className={`relative rounded-lg border border-slate-700 bg-slate-950 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300">
        <span className="font-medium text-slate-100">
          {detectedLanguage.toUpperCase()}
        </span>
        {!readOnly ? (
          <span className="text-slate-400">Editable</span>
        ) : (
          <span className="text-slate-400">Read only</span>
        )}
      </div>

      <div className="flex flex-col gap-2 p-3">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          spellCheck={false}
          className="h-64 w-full resize-y rounded-md bg-slate-950/30 p-3 text-sm font-mono text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
        />

        <div className="rounded-md border border-slate-700 bg-slate-950 p-3">
          <div
            className="max-w-none overflow-auto text-sm"
            /* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML gerado pelo Shiki a partir do código de entrada */
            dangerouslySetInnerHTML={{
              __html: highlighted || "<pre><code></code></pre>",
            }}
          />
        </div>
      </div>
    </div>
  );
}
