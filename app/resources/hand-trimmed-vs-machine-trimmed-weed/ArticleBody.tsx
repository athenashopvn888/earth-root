import Link from "next/link";
import type { ReactNode } from "react";
import { ARTICLE_MD, parseArticle, type ArticleBlock } from "./article";
import styles from "./article.module.css";

function renderInline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.filter(Boolean).map((token, index) => {
    const strong = token.match(/^\*\*(.+)\*\*$/);
    if (strong) return <strong key={index}>{strong[1]}</strong>;
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const label = link[1];
      const href = link[2];
      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href}>
            {label}
          </Link>
        );
      }
      return (
        <a key={index} href={href}>
          {label}
        </a>
      );
    }
    return token;
  });
}

function BlockView({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") return <h2>{renderInline(block.text)}</h2>;
  if (block.type === "p") return <p>{renderInline(block.text)}</p>;
  if (block.type === "ol") {
    return (
      <ol>
        {block.items.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {block.headers.map((header, index) => (
              <th key={index} scope="col">
                {renderInline(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{renderInline(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleBody() {
  return parseArticle(ARTICLE_MD).map((block, index) => <BlockView key={index} block={block} />);
}
