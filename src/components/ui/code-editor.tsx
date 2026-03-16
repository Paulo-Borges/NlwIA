"use client";

import * as React from "react";

export interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
}

export function CodeEditor({
  value,
  onChange,
  language = "plaintext",
  className = "",
  placeholder = "",
  readOnly = false,
}: CodeEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

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
          {language.toUpperCase()}
        </span>
        {!readOnly ? (
          <span className="text-slate-400">Editable</span>
        ) : (
          <span className="text-slate-400">Read only</span>
        )}
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        spellCheck={false}
        className="h-64 w-full resize-y bg-transparent p-3 text-sm font-mono text-slate-100 outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  );
}
