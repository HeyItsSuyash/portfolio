'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './TactileTerminal.module.css';
import { playHoverPop, playClickThud } from '@/utils/audioUtils';

type CommandLog = {
  command: string;
  output: React.ReactNode;
};

export default function TactileTerminal() {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'sys_init',
      output: 'Suyash Shukla Terminal [Version 2.0.26]\nType "help" to see available commands.',
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    playClickThud();

    switch (cmd) {
      case 'help':
        output = 'Available commands: whoami, skills, clear, sudo';
        break;
      case 'whoami':
        output = 'Suyash Shukla — Full-Stack Engineer, AI Builder, and Creator. Running on coffee and logic.';
        break;
      case 'skills':
        output = 'React, Next.js, Node.js, Python, TypeScript, LangChain, PyTorch, Docker, GCP';
        break;
      case 'sudo':
        output = 'Nice try. This incident will be reported.';
        break;
      case 'clear':
        setLogs([]);
        setInput('');
        return;
      default:
        output = `Command not found: ${cmd}`;
    }

    setLogs((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalShell} onClick={() => inputRef.current?.focus()}>
        <div className={styles.terminalHeader}>
          <div className={styles.dotGroup}>
            <div className={styles.dot} style={{ background: '#ff5f56' }} onMouseEnter={playHoverPop}></div>
            <div className={styles.dot} style={{ background: '#ffbd2e' }} onMouseEnter={playHoverPop}></div>
            <div className={styles.dot} style={{ background: '#27c93f' }} onMouseEnter={playHoverPop}></div>
          </div>
          <div className={styles.title}>guest@suyash-portfolio ~</div>
        </div>
        
        <div className={styles.terminalBody}>
          {logs.map((log, i) => (
            <div key={i} className={styles.logEntry}>
              <div className={styles.commandLine}>
                <span className={styles.prompt}>$</span> {log.command}
              </div>
              <div className={styles.output}>{log.output}</div>
            </div>
          ))}
          
          <form onSubmit={handleCommand} className={styles.inputForm}>
            <span className={styles.prompt}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.input}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </form>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}
