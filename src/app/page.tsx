"use client";

import { Button, CodeEditor } from "@/components/ui";
import * as React from "react";

export default function Home() {
  const [code, setCode] = React.useState<string>(`console.log("Olá mundo!");`);

  const HandleClick = () => {
    console.log("Apertou no Botão");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <CodeEditor
        value={code}
        onChange={setCode}
        language="javascript"
        className="w-full max-w-3xl"
      />

      <Button onClick={HandleClick}>Botão de exemplo</Button>
    </main>
  );
}
