import { useEffect, useRef, useState } from "react";
import { Camera, MessageCircle, Send, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import perfilDark from "../assets/perfil-dark.jpeg";
import gallery1 from "../assets/bg-user-dark.jpeg";
import gallery2 from "../assets/bg-light.jpeg";
import gallery3 from "../assets/bg2-light.jpeg";
import gallery4 from "../assets/perfil.jpeg";
import gallery5 from "../assets/pathy01.jpeg";
import gallery6 from "../assets/pathy02.jpeg";
import gallery7 from "../assets/pathy03.jpeg";
import gallery8 from "../assets/pathy04.jpeg";
import gallery9 from "../assets/pathy05.jpeg";
import gallery10 from "../assets/pathy06.jpeg";
import gallery11 from "../assets/pathy07.jpeg";
import gallery12 from "../assets/pathy08.jpeg";

const links = [
  {
    label: "Meu Instagram",
    href: "https://www.instagram.com/pathylouzada/",
    icon: Camera,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5585997107184&text=Ol%C3%A1%20Pathy%2C%20gostaria%20de%20marcar%20um%20encontro%20com%20voc%C3%AA.",
    icon: MessageCircle,
  },
  {
    label: "Telegram",
    href: "https://t.me/pathylouzada",
    icon: Send,
  },
];

const socials = [
  { href: "https://www.instagram.com/pathylouzada/", icon: Camera, label: "Instagram" },
  { href: "https://t.me/pathylouzada", icon: Send, label: "Telegram" },
  { href: "https://api.whatsapp.com/send?phone=5585997107184&text=Ol%C3%A1%20Pathy%2C%20gostaria%20de%20marcar%20um%20encontro%20com%20voc%C3%AA.", icon: MessageCircle, label: "WhatsApp" },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12];

const Index = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    lightboxRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <div className="page-shell">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/video-dark.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />

      <main className="profile-card">
        <section className="profile-header">
          <div className="avatar-ring">
            <img src={perfilDark} alt="Pathy Louzada" className="avatar-image" />
          </div>
          <h1 className="profile-name">Pathy Louzada</h1>
          <p className="profile-handle">@pathylouzada</p>
        </section>

        <section className="links-stack">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="link-item">
              <link.icon size={18} className="link-icon" />
              <span>{link.label}</span>
              <span className="link-arrow">?</span>
            </a>
          ))}
        </section>

        <section className="gallery-section">
          <p className="gallery-title">Galeria</p>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                className="gallery-item"
                aria-label={`Abrir foto ${i + 1} em tela cheia`}
                onClick={() => openLightbox(i)}
              >
                <img src={img} alt={`Foto ${i + 1}`} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </section>

        <section className="social-row">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={social.label}>
              <social.icon size={18} />
            </a>
          ))}
        </section>

        <footer className="card-footer">
          Feito com <Heart size={12} /> por Pathy
        </footer>
      </main>

      {lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualizando foto ${lightboxIndex + 1} de ${galleryImages.length}`}
          tabIndex={-1}
          onClick={closeLightbox}
        >
          <button type="button" aria-label="Fechar galeria" className="lightbox-close" onClick={closeLightbox}>
            <X size={18} />
          </button>
          <button
            type="button"
            aria-label="Foto anterior"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Pr�xima foto"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={18} />
          </button>
          <img
            src={galleryImages[lightboxIndex]}
            alt={`Foto ${lightboxIndex + 1} ampliada`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
