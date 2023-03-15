import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_style}>
      <div className="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
          <p class="col-md-4 mb-0 text-white">© 2022 Company, Inc</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              src="Logo_Mines_Nancy.png"
              alt="Logo Mines Nancy"
              height={50}
              class={styles.logo_style}
            />
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
