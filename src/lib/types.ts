export interface BottonCardProps {
    isDark: boolean;
    text: string;
    href: string;
}

export interface CardInfoProps {
    src: string;
    alt: string;
    text: string;
    descripcion: string;
    link: string;
    linkGithub: string;
}

export interface ContactForm {
    nombre: string;
    email: string;
    asunto: string;
    message: string;
}

export interface PostData {
    id: string;
    content: string;
    subtitle: string;
    title: string;
    date: string;
    category: string;
}
//cardInfo:{src: string, alt: string, text: string, link: string} 