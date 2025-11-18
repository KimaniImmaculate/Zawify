function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Zawify. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#222",
    color: "white",
    marginTop: "40px",
  },
};

export default Footer;
