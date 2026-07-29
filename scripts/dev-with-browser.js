const { spawn, exec } = require("child_process");

const OPEN_DELAY_MS = 3500;
const URL = "http://localhost:3000";

setTimeout(() => {
  const command =
    process.platform === "win32"
      ? `start ${URL}`
      : process.platform === "darwin"
        ? `open ${URL}`
        : `xdg-open ${URL}`;

  exec(command);
}, OPEN_DELAY_MS);

const child = spawn("npx", ["next", "dev", "--webpack"], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
