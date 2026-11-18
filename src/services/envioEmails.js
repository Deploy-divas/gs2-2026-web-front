
import { supabase } from "./supabase";
import emailjs from "@emailjs/browser";

export async function enviarMensagem(dados) {

  // salvar mensagem no
    const { error } = await supabase
    .from("mensagens")
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
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      dados,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return {
      salvou: true,
      enviou: true
    };

  } catch (error) {
    return {
      salvou: true,
      enviou: false,
      erro: error.text || error.message
    };
  }
}
