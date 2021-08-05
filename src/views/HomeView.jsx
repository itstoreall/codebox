import { useContext } from 'react';
import Context from '../Context';

export default function Home() {
  const { views } = useContext(Context);

  return (
    <article className="categoryWrap">
      {views.map(({ title, link }) => (
        <section key={title} className="category">
          <h2 className="categoryTitle">{title}</h2>
          <a className="categoryLink" href={link.href}>
            {link.anchor}
          </a>
        </section>
      ))}
    </article>
  );
}
