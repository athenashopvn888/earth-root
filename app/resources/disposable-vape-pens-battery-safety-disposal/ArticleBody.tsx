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
  if (block.type === "h3") return <h3>{renderInline(block.text)}</h3>;
  if (block.type === "p") {
    return block.italic ? (
      <p>
        <em>{block.text}</em>
      </p>
    ) : (
      <p>{renderInline(block.text)}</p>
    );
  }
  if (block.type === "ol") {
    return (
      <ol>
        {block.items.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ol>
    );
  }
  const tasks = block.items.every((item) => item.task);
  return (
    <ul className={tasks ? styles.tasks : undefined}>
      {block.items.map((item, index) => (
        <li key={index}>
          {item.task ? <input type="checkbox" disabled tabIndex={-1} aria-hidden="true" /> : null}
          {item.task ? <span>{renderInline(item.text)}</span> : renderInline(item.text)}
        </li>
      ))}
    </ul>
  );
}

export default function ArticleBody() {
  return parseArticle(ARTICLE_MD).map((block, index) => <BlockView key={index} block={block} />);
}
