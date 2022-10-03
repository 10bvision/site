import styles from "../styles/layout.module.scss";

import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <main className={styles.main}>{children}</main>
    <hr className={styles.hr} />
    <Footer />
  </>
);

export default Layout;
