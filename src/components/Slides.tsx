import { ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Logo } from "./Logo";

// -- Layout Animations --
const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const SlideContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div 
    className={`w-full h-full flex ${className}`}
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

const MDiv = ({ children, className = "", ...props }: any) => (
  <motion.div variants={itemVariants} className={className} {...props}>{children}</motion.div>
);

// -- Individual Slides --

export const Slide1 = () => (
  <SlideContainer className="relative bg-marrom-escuro overflow-hidden flex-col justify-center px-16 lg:px-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(92,107,71,0.25)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(181,196,161,0.1)_0%,transparent_60%)]" />
    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-verde opacity-10 clip-diagonal" />
    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-verde-sage to-transparent" />
    
    <div className="relative z-10 w-full max-w-5xl">
      <MDiv className="text-xs uppercase tracking-[0.25em] text-verde-sage mb-8">
        Proposta de Comunicação & Estratégia de Marca
      </MDiv>
      <MDiv className="font-display text-7xl md:text-8xl lg:text-[7rem] font-light leading-none mb-4 text-off-white">
        Ryna<br/><em className="text-verde-sage italic">Hayashi</em>
      </MDiv>
      <MDiv className="font-display text-2xl font-light text-bege-escuro mb-12 tracking-wide">
        Psicóloga Clínica · CRP 06/104087
      </MDiv>
      <MDiv className="w-16 h-px bg-verde mb-8" />
      <MDiv className="text-sm tracking-wider text-bege/60 font-body">
        Evolução da Identidade Visual · Presença Digital · Conteúdo · Website
      </MDiv>
    </div>
  </SlideContainer>
);

export const Slide2 = () => (
  <SlideContainer className="bg-off-white text-marrom-escuro flex-col md:flex-row">
    <div className="w-full md:w-1/2 bg-verde text-off-white p-12 lg:p-24 flex flex-col justify-center">
      <MDiv className="font-display text-8xl font-light text-white/10 leading-none -mb-4">02</MDiv>
      <MDiv className="text-[10px] tracking-[0.3em] uppercase text-verde-sage mb-4">Diagnóstico</MDiv>
      <MDiv className="font-display text-5xl lg:text-6xl font-light leading-tight mb-12">
        Onde<br/>você está<br/>hoje
      </MDiv>
      
      <div className="space-y-6">
        <MDiv className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-verde-sage/30 flex items-center justify-center shrink-0">
            <CheckCircle2 size={20} className="text-verde-sage" />
          </div>
          <div>
            <strong className="block font-medium mb-1 truncate text-lg">Paleta intuitiva e elegante</strong>
            <span className="text-sm text-off-white/80 leading-relaxed block">Você já usa verde oliva, bege e marrom nativamente. O sentimento transmitido já está certo.</span>
          </div>
        </MDiv>
        <MDiv className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-verde-sage/30 flex items-center justify-center shrink-0">
            <CheckCircle2 size={20} className="text-verde-sage" />
          </div>
          <div>
            <strong className="block font-medium mb-1 text-lg">Voz autêntica e conectada</strong>
            <span className="text-sm text-off-white/80 leading-relaxed block">Conteúdos têm uma linguagem humana, acolhedora e escapam dos clichês da psicologia.</span>
          </div>
        </MDiv>
        <MDiv className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-bege/15 flex items-center justify-center shrink-0">
            <AlertCircle size={20} className="text-bege" />
          </div>
          <div>
            <strong className="block font-medium mb-1 text-lg">Constância frágil</strong>
            <span className="text-sm text-off-white/80 leading-relaxed block">Vídeos ficam guardados no rolo da câmera por falta de estrutura de um calendário editorial.</span>
          </div>
        </MDiv>
      </div>
    </div>
    
    <div className="w-full md:w-1/2 bg-off-white p-12 lg:p-24 flex flex-col justify-center">
      <MDiv className="text-[10px] tracking-[0.3em] uppercase text-marrom mb-4">Oportunidades</MDiv>
      <MDiv className="font-display text-4xl lg:text-5xl font-light leading-tight mb-10 text-marrom-escuro">
        O que<br/>vamos mudar
      </MDiv>
      
      <div className="space-y-4">
        {[
          { title: "🎬 Vídeo como principal ativo", desc: "Sistematizar a postagem do seu material já gravado, sem gerar bloqueios de perfeccionismo." },
          { title: "🔗 Ecossistema Estratégico", desc: "TikTok atrai público novo, Instagram gera confiança, Website unifica e fecha o agendamento." },
          { title: "🎨 Sofisticação da Marca", desc: "Vamos evoluir seu logo atual (borboleta de folhas) para uma versão mais polida e harmônica com seu feed terroso." },
          { title: "📅 Calendário Sem Pensar", desc: "Fim do 'o que vou postar hoje?'. Você terá linhas de conteúdo pré-estraturadas." }
        ].map((opp, idx) => (
          <MDiv key={idx} className="bg-bege rounded-xl p-5 border-l-4 border-verde">
            <strong className="font-medium text-marrom-escuro block mb-1">{opp.title}</strong>
            <p className="text-sm text-marrom leading-relaxed">{opp.desc}</p>
          </MDiv>
        ))}
      </div>
    </div>
  </SlideContainer>
);

export const Slide3 = () => (
  <SlideContainer className="bg-bege p-12 lg:p-24 flex-col justify-center items-start">
    <MDiv className="mb-12">
      <div className="text-[10px] tracking-[0.3em] uppercase text-marrom mb-3">Identidade Visual Melhorada</div>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-marrom-escuro leading-tight mb-2">
        A evolução da marca <em className="text-verde">Ryna Hayashi</em>
      </h2>
      <p className="max-w-2xl text-marrom">
        Uma transição do antigo logo roxo vibrante para uma estética line-art mais elegante, natural e alinhada às cores que você já utiliza com sucesso nos seus posts de carrossel.
      </p>
    </MDiv>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      <MDiv className="bg-off-white rounded-2xl p-8 relative overflow-hidden border-t-4 border-verde shadow-sm">
        <h3 className="font-display text-2xl font-light text-marrom-escuro mb-6">Conceito do Novo Logo</h3>
        <div className="bg-bege/50 rounded-xl p-4 flex items-center gap-4 mb-4 border border-marrom/10">
          <Logo className="w-14 h-14 text-verde" />
          <div>
            <div className="font-display text-xl leading-none font-medium text-marrom-escuro">Ryna Hayashi</div>
            <div className="text-[9px] tracking-widest uppercase text-verde mt-1">Psicóloga Clínica</div>
          </div>
        </div>
        <div className="bg-verde rounded-xl p-4 flex items-center gap-4 mb-4">
          <Logo className="w-14 h-14 text-bege" />
          <div>
            <div className="font-display text-xl leading-none font-medium text-bege">Ryna Hayashi</div>
            <div className="text-[9px] tracking-widest uppercase text-verde-sage mt-1">Psicóloga Clínica</div>
          </div>
        </div>
        <p className="text-sm text-marrom leading-relaxed">
          Mantivemos o motivo original (asas de borboleta formadas por folhas da ACP). O diferencial é o traço minimalista e a integração com a nova paleta oliva/bege.
        </p>
      </MDiv>

      <MDiv className="bg-off-white rounded-2xl p-8 relative overflow-hidden shadow-sm">
        <h3 className="font-display text-2xl font-light text-marrom-escuro mb-6">Paleta Autêntica</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { hex: "#5C6B47", name: "Verde Oliva", class: "bg-verde" },
            { hex: "#8A9E6E", name: "Sage", class: "bg-verde-claro" },
            { hex: "#D6CCB8", name: "Bege Esc", class: "bg-bege-escuro" },
            { hex: "#EDE8DF", name: "Creme", class: "bg-bege" },
            { hex: "#4A3C2E", name: "Marrom", class: "bg-marrom-escuro" },
          ].map((color, i) => (
            <div key={i} className="text-center group">
              <div className={`w-12 h-12 rounded-full ${color.class} shadow-inner transition-transform group-hover:scale-110 mb-2 ring-1 ring-black/5`} />
              <div className="text-[10px] text-marrom font-medium">{color.name}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-marrom leading-relaxed">
          Tons extraídos diretamente da atmosfera tranquila que seus melhores posts no Instagram já transmitem. Cores orgânicas, adultas e acolhedoras.
        </p>
      </MDiv>

      <MDiv className="bg-off-white rounded-2xl p-8 relative overflow-hidden shadow-sm">
        <h3 className="font-display text-2xl font-light text-marrom-escuro mb-6">Tipografia Polida</h3>
        <div className="mb-6">
          <div className="text-[10px] tracking-widest uppercase text-verde-claro mb-1">Títulos (Display)</div>
          <div className="font-display text-4xl font-light text-verde leading-none">Cormorant<br/><em className="italic">Garamond</em></div>
        </div>
        <div className="mb-4">
          <div className="text-[10px] tracking-widest uppercase text-verde-claro mb-2">Corpo de Texto (Body)</div>
          <div className="font-body text-sm text-marrom leading-relaxed font-medium">
            DM Sans — Ideal para leitura digital. Transmite modernidade, clareza e acessibilidade nas legendas e no site.
          </div>
        </div>
      </MDiv>
    </div>
  </SlideContainer>
);

export const Slide4 = () => (
  <SlideContainer className="bg-marrom-escuro p-12 lg:p-24 flex-col justify-center">
    <MDiv className="mb-12 max-w-2xl">
      <div className="text-[10px] tracking-[0.3em] uppercase text-verde-sage mb-3">Estratégia Digital</div>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-off-white leading-tight mb-2">
        O lugar certo para<br/><em className="text-verde-sage">cada conteúdo</em>
      </h2>
      <p className="text-bege/60">Uma cascata de conversão que elimina o retrabalho.</p>
    </MDiv>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <MDiv className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-verde-sage/50 transition-colors">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bege/10 text-bege text-[9px] font-bold tracking-widest uppercase mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-bege" />
          TikTok
        </div>
        <h3 className="font-display text-2xl text-off-white font-light mb-4 text-balance">Topo de Funil:<br/>Atração Ágil</h3>
        <ul className="space-y-3 mb-8">
          {["Vídeos curtos (30-60s) dinâmicos", "Tira dúvidas direto e rápido", "Linguagem simples (desmistificação)", "Alta taxa de descoberta de público"].map((item, i) => (
            <li key={i} className="text-sm text-bege/80 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-verde-sage">
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-white/10 text-[10px] text-verde-sage tracking-widest uppercase">
          3-4x Semana (Ativo gravado)
        </div>
      </MDiv>

      <MDiv className="bg-verde/15 border-2 border-verde rounded-2xl p-8 relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-verde text-bege px-3 py-1 rounded-full text-[9px] tracking-widest uppercase font-bold shadow-xl">
          Foco Principal
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-verde-sage/20 text-verde-sage text-[9px] font-bold tracking-widest uppercase mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-verde-sage" />
          Instagram
        </div>
        <h3 className="font-display text-2xl text-off-white font-light mb-4">Meio de Funil:<br/>Confiança Profunda</h3>
        <ul className="space-y-3 mb-8">
          {["Carrosséis educativos aprofundados", "Reaproveitamento de Reels (do hub)", "Stories diários (bastidores e caixinhas)", "Feed esteticamente organizado"].map((item, i) => (
            <li key={i} className="text-sm text-bege/90 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-verde-sage">
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-white/10 text-[10px] text-verde-sage tracking-widest uppercase">
          4-5x Semana (Constância)
        </div>
      </MDiv>

      <MDiv className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-bege-escuro/50 transition-colors">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bege-escuro/20 text-bege-escuro text-[9px] font-bold tracking-widest uppercase mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-bege-escuro" />
          Website
        </div>
        <h3 className="font-display text-2xl text-off-white font-light mb-4">Fundo de Funil:<br/>A Conversão</h3>
        <ul className="space-y-3 mb-8">
          {["Um porto seguro para agendamentos", "FAQ que elimina objeções da clínica", "Blog para SEO futuro e autoridade", "Transmite total profissionalismo"].map((item, i) => (
            <li key={i} className="text-sm text-bege/80 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-verde-sage">
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-white/10 text-[10px] text-verde-sage tracking-widest uppercase">
          Destino central de links
        </div>
      </MDiv>
    </div>
  </SlideContainer>
);

export const Slide5 = () => (
  <SlideContainer className="bg-off-white text-marrom-escuro flex-col md:flex-row">
    <div className="w-full md:w-1/2 bg-marrom text-off-white p-12 lg:p-24 flex flex-col justify-center">
      <MDiv className="font-display text-8xl font-light text-white/10 leading-none -mb-4">05</MDiv>
      <MDiv className="text-[10px] tracking-[0.3em] uppercase text-bege/70 mb-4">Planejamento Temático</MDiv>
      <MDiv className="font-display text-4xl lg:text-5xl font-light leading-tight mb-12 text-bege">
        Construindo sua<br/>Autoridade
      </MDiv>
      
      <div className="space-y-6">
        {[
          { num: "01", title: "A Prática Clínica", desc: "Desmistificar o processo terapêutico, clarificar a ACP." },
          { num: "02", title: "Escuta Interna", desc: "Reflexões sobre emoções, autoconhecimento e pausas." },
          { num: "03", title: "A Psicóloga", desc: "Humanização. Mostre a Ryna real. Gera empatia veloz." },
          { num: "04", title: "Próximo Passo", desc: "Conteúdos que sutilmente convidam para o agendamento." },
        ].map((pillar, idx) => (
          <MDiv key={idx} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
            <div className="font-display text-sm italic text-verde-sage mb-1">Pilar {pillar.num}</div>
            <div className="font-medium text-[15px] mb-1">{pillar.title}</div>
            <div className="text-sm text-off-white/60 leading-relaxed">{pillar.desc}</div>
          </MDiv>
        ))}
      </div>
    </div>
    
    <div className="w-full md:w-1/2 bg-off-white p-12 lg:p-24 flex flex-col justify-center">
      <MDiv className="text-[10px] tracking-[0.3em] uppercase text-marrom mb-4">Imediatismo e Ação</MDiv>
      <MDiv className="font-display text-3xl font-light leading-tight mb-10 text-marrom-escuro">
        Ideias Prontas (Semana 1)
      </MDiv>
      
      <div className="space-y-4">
        {[
          { type: "Reel", tagColor: "bg-verde/15 text-verde ring-verde/30", text: "3 sinais sutis de que você se beneficiaria da terapia (não precisa esperar o limite)." },
          { type: "Carrossel", tagColor: "bg-marrom/15 text-marrom ring-marrom/30", text: "O mínimo sobre a Abordagem Centrada na Pessoa — em 4 arrastos." },
          { type: "Stories", tagColor: "bg-verde-claro/20 text-verde ring-verde-claro/40", text: "Caixinha interativa: 'Pode perguntar qualquer coisa sobre ir ao psicólogo'." },
          { type: "B-Roll", tagColor: "bg-verde/15 text-verde ring-verde/30", text: "Áudio viral por cima de vídeo seu escrevendo: 'A terapia não decide. Ela te devolve a clareza para decidir'." }
        ].map((idea, idx) => (
          <MDiv key={idx} className="bg-bege rounded-xl p-5 flex gap-4 items-start shadow-sm border border-marrom/5">
            <span className={`text-[10px] tracking-widest uppercase font-bold px-2 py-1 rounded-md ring-1 shrink-0 ${idea.tagColor}`}>
              {idea.type}
            </span>
            <span className="text-sm text-marrom-escuro leading-relaxed font-medium">"{idea.text}"</span>
          </MDiv>
        ))}
      </div>
    </div>
  </SlideContainer>
);

export const Slide6 = () => (
  <SlideContainer className="bg-bege p-12 lg:p-24 flex-col justify-center items-center text-center">
    <MDiv className="mb-10 text-center w-full max-w-4xl">
      <div className="text-[10px] tracking-[0.3em] uppercase text-marrom mb-4">Experiência Digital (Wireframe)</div>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-marrom-escuro leading-tight">
        Seu porto seguro, <em className="text-verde">o Website</em>
      </h2>
      <p className="max-w-2xl mx-auto text-marrom mt-4 text-sm">
        O design refletirá a mesma paz que seu feed do Instagram, guiando pacientes suavemente até o contato.
      </p>
    </MDiv>
    
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Wireframe UI */}
      <MDiv className="bg-off-white rounded-2xl overflow-hidden shadow-2xl border border-black/5 ring-1 ring-white">
        <div className="h-10 bg-verde flex items-center px-4 gap-2 border-b border-black/10">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <div className="h-40 bg-gradient-to-br from-verde to-verde-claro flex flex-col items-center justify-center p-6 text-center text-off-white">
          <div className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center mb-3">
             <Logo className="w-6 h-6" />
          </div>
          <h4 className="font-display text-2xl font-light italic mb-1">Um espaço para escutar a si</h4>
          <p className="text-[8px] uppercase tracking-widest opacity-80">Ryna Hayashi · Psicoterapia</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="h-8 rounded-lg bg-bege/80 border border-marrom/5" />
          <div className="h-4 w-3/4 rounded-md bg-bege-escuro/40" />
          <div className="h-3 w-1/2 rounded-md bg-bege-escuro/30" />
          
          <div className="flex gap-4 pt-4 mt-2 border-t border-bege-escuro/20">
             <div className="flex-1 h-32 rounded-lg bg-bege/60" />
             <div className="flex-1 space-y-3">
                <div className="h-6 w-full rounded bg-bege" />
                <div className="h-3 w-full rounded bg-bege-escuro/30" />
                <div className="h-3 w-4/5 rounded bg-bege-escuro/30" />
                <div className="h-10 w-full rounded-md bg-verde shadow-sm mt-4" />
             </div>
          </div>
        </div>
      </MDiv>

      {/* Feature list */}
      <div className="space-y-6 text-left">
        {[
          { num: "1.", title: "Efeito Calma (Hero)", desc: "A primeira impressão visual dita o sentimento. Foco 100% em acolhimento e clareza, sem jargões de vendas." },
          { num: "2.", title: "Conexão Pessoal", desc: "Sua foto, sua filosofia sobre a abordagem humana e seu registro profissional (CRP) muito claros." },
          { num: "3.", title: "Jornada sem Fricção", desc: "Integração direta com o WhatsApp ou Calendly, de forma que o agendamento seja suave com um clique." },
          { num: "4.", title: "Espelho do Feed", desc: "A galeria final do site expõe seu conteúdo do Instagram de forma automática para reter a atenção e validar autoridade." }
        ].map((feat, i) => (
          <MDiv key={i} className="flex gap-4">
            <span className="font-display text-3xl font-light text-verde/50 leading-none">{feat.num}</span>
            <div>
              <strong className="block text-marrom-escuro font-medium text-[15px] mb-1">{feat.title}</strong>
              <p className="text-sm text-marrom leading-relaxed">{feat.desc}</p>
            </div>
          </MDiv>
        ))}
      </div>
    </div>
  </SlideContainer>
);

export const Slide7 = () => (
  <SlideContainer className="bg-marrom-escuro p-12 lg:p-24 flex-col justify-center relative overflow-hidden">
    <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(92,107,71,0.25)_0%,transparent_70%)] blur-2xl pointer-events-none" />
    
    <MDiv className="mb-12 max-w-2xl relative z-10">
      <div className="text-[10px] tracking-[0.3em] uppercase text-verde-sage mb-3">Modelos de Parceria</div>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-off-white leading-tight">
        Opções p/ <em className="text-verde-sage">acelerar</em>
      </h2>
    </MDiv>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
      <MDiv className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-1 transition-transform">
        <div className="text-[10px] tracking-widest text-verde-sage uppercase font-bold mb-3">Pacote 01</div>
        <h3 className="font-display text-3xl text-off-white font-light mb-2">Fundação<br/>Marca Digital</h3>
        <p className="text-sm text-bege/60 italic border-b border-white/10 pb-6 mb-6">Ponto de partida seguro</p>
        <ul className="space-y-3 mb-8 text-sm text-off-white/80">
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Logo + Identidade Visual</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Manual Completo e Paleta</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">12 Templates no Canva</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Bio / Destaques Otimizados</li>
        </ul>
      </MDiv>

      <MDiv className="bg-verde border border-verde-claro/30 rounded-3xl p-8 relative hover:-translate-y-1 transition-transform shadow-2xl">
        <div className="absolute top-0 right-8 bg-bege text-verde px-3 py-1.5 rounded-b-lg text-[9px] font-bold uppercase tracking-widest">
          Recomendado
        </div>
        <div className="text-[10px] tracking-widest text-bege/80 uppercase font-bold mb-3">Pacote 02</div>
        <h3 className="font-display text-3xl text-off-white font-light mb-2">Presença<br/>& Conversão</h3>
        <p className="text-sm text-bege/80 italic border-b border-white/20 pb-6 mb-6">Setup total e pronto para o jogo</p>
        <ul className="space-y-3 mb-8 text-sm text-off-white/90">
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bege before:text-2xl before:leading-none">Tudo do pacote Fundação</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bege before:text-2xl before:leading-none font-bold">Desenvolvimento do Website</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bege before:text-2xl before:leading-none">Planejamento Editorial Mensal</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bege before:text-2xl before:leading-none">24 Templates (Stories/Feed)</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bege before:text-2xl before:leading-none">Setup funil Linktree/Zap</li>
        </ul>
      </MDiv>

      <MDiv className="bg-marrom border border-marrom-escuro rounded-3xl p-8 hover:-translate-y-1 transition-transform">
        <div className="text-[10px] tracking-widest text-bege-escuro uppercase font-bold mb-3">Pacote 03</div>
        <h3 className="font-display text-3xl text-off-white font-light mb-2">Mensalidade<br/>Gestão Full</h3>
        <p className="text-sm text-bege/70 italic border-b border-white/10 pb-6 mb-6">Terceirize o operacional</p>
        <ul className="space-y-3 mb-8 text-sm text-off-white/80">
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Criação dos Posts Mensais</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Agendamento de Feed</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Edição básica de Reels</li>
          <li className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-verde before:text-2xl before:leading-none">Revisão e Manutenção do Site</li>
        </ul>
      </MDiv>
    </div>
  </SlideContainer>
);

export const Slide8 = () => (
  <SlideContainer className="bg-verde text-off-white p-12 lg:p-24 flex-col justify-center overflow-hidden relative">
    <div className="absolute right-[-5%] bottom-[-15%] font-display font-light italic text-[35rem] leading-none text-white opacity-5 select-none pointer-events-none">
      RH
    </div>
    
    <div className="relative z-10 w-full max-w-5xl">
      <MDiv className="text-[10px] tracking-[0.3em] uppercase text-bege/60 mb-6">Cronograma & Início</MDiv>
      <MDiv className="font-display text-5xl lg:text-[4.5rem] font-light leading-[1.1] mb-6">
        Começamos <em className="italic">quando<br/>você quiser.</em>
      </MDiv>
      <MDiv className="text-lg text-bege max-w-xl font-light leading-relaxed mb-16">
        A essência, o estilo e o talento clínico você já construiu. Só falta orquestrar essa base técnica em um funil de conversão sólido.
      </MDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {[
          { num: "01", title: "Aprovação & Briefing", desc: "A escolha do modelo e 30 mins para alinhar detalhes finos e login." },
          { num: "02", title: "Sistematização da Marca", desc: "Entrega do novo logo e templates Canva em 7 a 10 dias úteis." },
          { num: "03", title: "Layout do Website", desc: "Criação paralela do site integrado (se incluso) para aprovação." },
          { num: "04", title: "Entrega Viva", desc: "Postagens testadas, website no ar, link na bio funcionando." }
        ].map((step, i) => (
          <MDiv key={i} className="flex gap-5 bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <span className="font-display text-4xl font-light text-white/20 leading-none">{step.num}</span>
            <div>
              <strong className="block text-[15px] font-medium mb-1.5">{step.title}</strong>
              <p className="text-sm text-bege/70 leading-relaxed font-light">{step.desc}</p>
            </div>
          </MDiv>
        ))}
      </div>
    </div>
  </SlideContainer>
);

const Concept1Logo = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[4.5rem] h-[4.5rem] text-[#5C6B47] drop-shadow-sm">
    <circle cx="50" cy="50" r="42" strokeDasharray="3 4" opacity="0.3"/>
    <path d="M48 30 C30 20 20 45 44 52 C35 40 45 35 48 30 Z" />
    <path d="M46 56 C30 55 25 75 44 70 C38 65 42 55 46 56 Z" />
    <path d="M52 30 C70 20 80 45 56 52 C65 40 55 35 52 30 Z" />
    <path d="M54 56 C70 55 75 75 56 70 C62 65 58 55 54 56 Z" />
    <path d="M50 25 C48 40 52 60 50 78" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Concept2Logo = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-[4.5rem] h-[4.5rem] text-[#C27A62] drop-shadow-sm">
    <path d="M 38 82 C 38 72 38 32 38 32 C 38 22 62 22 62 36 C 62 48 48 50 48 50 C 58 50 68 58 72 82" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="44" strokeWidth="0.5" opacity="0.2" />
    <path d="M 24 50 C 32 32 68 32 76 50 C 68 68 32 68 24 50 Z" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

const Concept3Logo = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-[4.5rem] h-[4.5rem] drop-shadow-sm">
    <path d="M 38 38 C 55 28 68 42 60 60 C 52 75 34 65 38 38 Z" fill="#6A828A" opacity="0.85" />
    <path d="M 62 38 C 75 48 72 70 55 75 C 38 80 46 32 62 38 Z" fill="#B4A89E" opacity="0.8" />
    <circle cx="50" cy="50" r="44" stroke="#4A3C2E" strokeWidth="1" opacity="0.4" strokeDasharray="12 4" strokeLinecap="round" fill="none" />
  </svg>
);

export const SlideConcepts = () => (
  <SlideContainer className="bg-bege p-8 lg:p-16 flex-col justify-start items-center overflow-y-auto w-full h-full">
    <MDiv className="mt-8 mb-8 text-center w-full max-w-4xl shrink-0">
      <div className="text-[10px] tracking-[0.3em] uppercase text-marrom mb-3">Expansão de Identidade Visual</div>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-marrom-escuro leading-tight mb-2">
        3 Conceitos de <em className="text-verde">Marca</em>
      </h2>
      <p className="text-marrom text-sm">Explorações visuais modernas baseadas na Abordagem Centrada na Pessoa e na sua essência.</p>
    </MDiv>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[85rem] pb-24 px-4 h-auto min-h-0">
       
      <MDiv className="bg-off-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(74,60,46,0.1)] border-t-[6px] border-[#5C6B47] flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1">
        <div className="flex justify-center mb-6 pt-4">
          <Concept1Logo />
        </div>
        <h3 className="font-display text-[1.65rem] text-marrom-escuro font-bold mb-1">01. O Voo Orgânico</h3>
        <p className="text-[10px] font-bold text-marrom opacity-70 uppercase tracking-[0.2em] mb-4">Acolhimento & Evolução</p>

        <p className="text-[13px] text-marrom leading-[1.6] mb-8 flex-1 opacity-90">
          <strong className="text-marrom-escuro">Inspiração:</strong> Evolução natural da borboleta atual. Substituímos traços duros por folhas contínuas e orgânicas, mantendo a familiaridade para seus seguidores enquanto eleva o padrão visual. Simboliza metamorfose, crescimento seguro e o florescer humano.
        </p>

        <div className="space-y-5 mb-2 bg-[#F8F5F0] -mx-4 -mb-4 p-5 rounded-xl border border-black/5">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#5C6B47] mb-1 font-bold">Tipografia</div>
            <div className="flex gap-2 items-baseline">
              <span className="text-[1.1rem] font-display italic text-marrom-escuro font-medium">Cormorant</span>
              <span className="text-[13px] text-marrom-escuro font-body opacity-80">+ DM Sans</span>
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#5C6B47] mb-2 font-bold">Paleta de Cores</div>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#5C6B47] shadow-sm border border-black/5" title="Verde Oliva" />
              <div className="w-7 h-7 rounded-full bg-[#8A9E6E] shadow-sm border border-black/5" title="Sage" />
              <div className="w-7 h-7 rounded-full bg-[#EDE8DF] shadow-sm border border-black/5" title="Creme" />
              <div className="w-7 h-7 rounded-full bg-[#4A3C2E] shadow-sm border border-black/5" title="Marrom Profundo" />
            </div>
          </div>
        </div>
      </MDiv>

      <MDiv className="bg-off-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(74,60,46,0.1)] border-t-[6px] border-[#C27A62] flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1">
        <div className="flex justify-center mb-6 pt-4">
          <Concept2Logo />
        </div>
        <h3 className="text-[1.5rem] text-marrom-escuro font-bold mb-1 font-['Playfair_Display']">02. A Jornada Fluida</h3>
        <p className="text-[10px] font-bold text-[#C27A62] opacity-80 uppercase tracking-[0.2em] mb-4 font-['Lato']">Identidade & Continuidade</p>

        <p className="text-[13px] text-marrom leading-[1.6] mb-8 flex-1 font-['Lato'] opacity-90">
          <strong className="text-marrom-escuro">Inspiração:</strong> O protagonismo é do seu nome "Ryna". Um monograma 'R' construído por uma linha contínua ininterrupta, abraçada por formas orgânicas. Representa o processo da terapia: único, não linear, mas contínuo, onde terapeuta e paciente caminham lado a lado.
        </p>

        <div className="space-y-5 mb-2 bg-[#F8F5F0] -mx-4 -mb-4 p-5 rounded-xl border border-black/5">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#C27A62] mb-1 font-bold">Tipografia</div>
            <div className="flex gap-2 items-baseline">
              <span className="text-[1.1rem] font-['Playfair_Display'] italic text-marrom-escuro font-bold">Playfair</span>
              <span className="text-[13px] text-marrom-escuro font-['Lato'] opacity-80">+ Lato</span>
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#C27A62] mb-2 font-bold">Paleta de Cores</div>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#C27A62] shadow-sm border border-black/5" title="Terracota Suave" />
              <div className="w-7 h-7 rounded-full bg-[#8A9E6E] shadow-sm border border-black/5" title="Verde Sage" />
              <div className="w-7 h-7 rounded-full bg-[#F4F1ED] shadow-sm border border-black/5" title="Areia Clara" />
              <div className="w-7 h-7 rounded-full bg-[#5A4D45] shadow-sm border border-black/5" title="Marrom Quente" />
            </div>
          </div>
        </div>
      </MDiv>

      <MDiv className="bg-off-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(74,60,46,0.1)] border-t-[6px] border-[#6A828A] flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1">
        <div className="flex justify-center mb-6 pt-4">
          <Concept3Logo />
        </div>
        <h3 className="text-[1.5rem] text-marrom-escuro font-medium mb-1 font-['Outfit'] tracking-tight">03. O Ponto Central</h3>
        <p className="text-[10px] font-bold text-[#6A828A] opacity-80 uppercase tracking-[0.2em] mb-4 font-['Inter']">Abordagem Centrada</p>

        <p className="text-[13px] text-marrom leading-[1.6] mb-8 flex-1 font-['Inter'] opacity-90">
          <strong className="text-marrom-escuro">Inspiração:</strong> Uma homenagem refinada abstrata à ACP. Duas formas orgânicas sobrepostas criam um espaço comum (o vínculo terapêutico). Emolduradas pelo círculo imperfeito "Enso", que simboliza a aceitação incondicional e o estado de evolução constante.
        </p>

        <div className="space-y-5 mb-2 bg-[#F8F5F0] -mx-4 -mb-4 p-5 rounded-xl border border-black/5">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#6A828A] mb-1 font-bold">Tipografia</div>
            <div className="flex gap-2 items-baseline">
              <span className="text-[1.1rem] font-['Outfit'] text-marrom-escuro font-semibold">Outfit</span>
              <span className="text-[13px] text-marrom-escuro font-['Inter'] opacity-80">+ Inter</span>
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-[#6A828A] mb-2 font-bold">Paleta de Cores</div>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#6A828A] shadow-sm border border-black/5" title="Azul Ardósia" />
              <div className="w-7 h-7 rounded-full bg-[#B4A89E] shadow-sm border border-black/5" title="Cinza Quente" />
              <div className="w-7 h-7 rounded-full bg-[#FAF9F7] shadow-sm border border-black/5" title="Off White" />
              <div className="w-7 h-7 rounded-full bg-[#4A3C2E] shadow-sm border border-black/5" title="Marrom Profundo" />
            </div>
          </div>
        </div>
      </MDiv>

    </div>
  </SlideContainer>
);
