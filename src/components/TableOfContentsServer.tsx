import { JSDOM } from 'jsdom';
import styles from './TableOfContents.module.css';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsServerProps {
    htmlContent: string;
}

export default function TableOfContentsServer({ htmlContent }: TableOfContentsServerProps) {
    // Extract headings from the HTML content using JSDOM
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const headingElements = document.querySelectorAll('h1, h2, h3, h4');

    const headings: Heading[] = Array.from(headingElements).map((heading: Element) => {
        // If heading doesn't have an id, create one from its text content
        const text = heading.textContent || '';
        let id = heading.getAttribute('id') || '';

        if (!id) {
            id = text.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            heading.setAttribute('id', id);
        }

        return {
            id,
            text,
            level: parseInt(heading.tagName.substring(1), 10),
        };
    });

    if (headings.length === 0) {
        return null;
    }

    return (
        <div className={styles.tableOfContents}>
            <div className={styles.tocHeader}>Table of Contents</div>
            <nav className={styles.tocNav}>
                <ul className={styles.tocList} data-headings={JSON.stringify(headings)}>
                    {headings.map((heading) => (
                        <li
                            key={heading.id}
                            className={`
                ${styles.tocItem} 
                ${styles[`level${heading.level}`]}
              `}
                            data-heading-id={heading.id}
                        >
                            <button
                                className={styles.tocLink}
                                data-target-id={heading.id}
                            >
                                {heading.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
} 