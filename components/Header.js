import { jsx } from "@emotion/react";
import styles from "./Header.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  return (
    <header className={styles.header_style}>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img
              src="Logo_Mines_Nancy.png"
              alt="Logo Mines Nancy"
              height={50}
              className={styles.logo_style}
            />
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 link-light">
                Accueil
              </a>
            </li>
            <li>
              <a href="/projet" className="nav-link nav-item px-2 link-light">
                Le Projet
              </a>
            </li>
            <li>
              <a href="/download" className="nav-link px-2 link-light">
                Download
              </a>
            </li>
            <li>
              <a href="/faq" className="nav-link px-2 link-light">
                FAQs
              </a>
            </li>
          </ul>

          <div className={`col-md-3 text-end ${styles.user_logging}`}>
            {user && (
              <div className={styles.user_data_style}>
                <div className={styles.user_name_style}>{user.name}</div>
                <div>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className={styles.user_logo_style}
                  />
                </div>
              </div>
            )}
            {user && (
              <a href="/api/auth/logout">
                <button type="button" className="btn btn-primary">
                  Log-out
                </button>
              </a>
            )}
            {!user && (
              <a href="/api/auth/login">
                <button type="button" className="btn btn-primary">
                  Log-in
                </button>
              </a>
            )}
          </div>
        </header>
      </div>
    </header>
  );
}
