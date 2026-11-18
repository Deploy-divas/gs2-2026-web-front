
import { supabase } from "./supabaseClient";
import emailjs from "@emailjs/browser";

export async function enviarMensagem(dados) {

  // salvar mensagem no
    const { error } = await supabase
    .from("emails")
    .insert([dados]);

  if (error) {
    return {
      salvou: false,
      enviou: false,
      erro: error.message
    };
  }

  // enviar e-mail

  try {
  const resposta = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    dados,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  console.log("Resposta do EmailJS:", resposta);

  return {
    salvou: true,
    enviou: true
  };

} catch (error) {
  console.error("Erro completo do EmailJS:", error);

  return {
    salvou: true,
    enviou: false,
    erro: error.text || error.message
  };
}
}
