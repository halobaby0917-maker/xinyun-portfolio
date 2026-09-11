import type { Project } from '@/data/portfolio';
import { MediaPlaceholder } from './media-placeholder';

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="project-card-head">
        <div>
          <span className="eyebrow">{project.index} / {project.kind}</span>
          <h3>{project.title}</h3>
          {project.englishTitle ? <p className="project-translation">{project.englishTitle}</p> : null}
        </div>
        {project.liveUrl ? (
          <span className="project-arrow" aria-hidden="true">↗</span>
        ) : (
          <span className="project-status">Case study soon</span>
        )}
      </div>
      <div className="tag-list" aria-label="Project categories">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className="project-card-body">
        <div className="project-copy">
          <p className="project-summary">{project.summary}</p>
          <p className="project-note">{project.cardNote}</p>
          <ul className="project-facts">
            {project.facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
          {project.liveUrl ? <p className="live-note">Open working product ↗</p> : null}
        </div>
        <MediaPlaceholder item={project.placeholders[0]} index={0} dark={project.featured} />
      </div>
    </>
  );

  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card-link"
          aria-label={`Open live product: ${project.title}`}
        >
          {content}
        </a>
      ) : (
        <div className="project-card-link">{content}</div>
      )}
    </article>
  );
}
