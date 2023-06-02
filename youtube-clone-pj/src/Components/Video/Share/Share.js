import { useState } from "react";

function Share({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
 function handleCopyClick() {
    // Async call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // updates the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="text" value={copyText} readOnly />
      <button onClick={handleCopyClick}>
        <span>{isCopied ? "Copied!" : "Share"}</span>
      </button>
    </div>
  );
}
export default Share;
