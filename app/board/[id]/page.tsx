import { notFound } from "next/navigation";
import { notices } from "@/data/notices";
import "../../board-detail.css";

type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() { return notices.map(({ id }) => ({ id })); }
export async function generateMetadata({ params }: Props) {
 const { id } = await params;
 const notice = notices.find(item => item.id === id);
 return { title: notice?.title ?? "소식을 찾을 수 없습니다" };
}
export default async function NoticePage({ params }: Props) {
 const { id } = await params;
 const notice = notices.find(item => item.id === id);
 if (!notice) notFound();
 const ordered = [...notices].sort((a,b) => a.date.localeCompare(b.date));
 const index = ordered.findIndex(item => item.id === id);
 const previous = ordered[index - 1];
 const next = ordered[index + 1];
 return <main id="main" className="notice-detail"><div className="notice-shell">
  <nav className="notice-breadcrumb" aria-label="현재 위치"><a href="/board">자료·소식</a><span aria-hidden="true">/</span><a href="/board#archive">소식</a></nav>
  <article>
   <header className="notice-header"><p className="notice-eyebrow">SAMKWANG CHEM · {notice.category}</p><h1>{notice.title}</h1><div className="notice-meta"><span>삼광켐</span><time dateTime={notice.date}>{notice.date.replaceAll("-", ".")}</time></div></header>
   <div className={`notice-body${id === "6" ? " notice-ethics" : ""}`} dangerouslySetInnerHTML={{ __html: notice.html }} />
   {notice.attachments.length > 0 && <section className="notice-downloads" aria-label="첨부파일"><h2>첨부파일</h2>{notice.attachments.map(file => <a key={file.src} href={file.src} download={file.name}>{file.name}<span aria-hidden="true">↓</span></a>)}</section>}
  </article>
  <nav className="notice-pagination" aria-label="다른 소식"><div>{previous ? <a href={`/board/${previous.id}`}><span>이전 글</span><strong>{previous.title}</strong><span aria-hidden="true">←</span></a> : <p>이전 글이 없습니다.</p>}</div><div>{next ? <a href={`/board/${next.id}`}><span>다음 글</span><strong>{next.title}</strong><span aria-hidden="true">→</span></a> : <p>다음 글이 없습니다.</p>}</div></nav>
  <a className="notice-list" href="/board#archive"><span aria-hidden="true">←</span> 소식 목록</a>
 </div></main>;
}
