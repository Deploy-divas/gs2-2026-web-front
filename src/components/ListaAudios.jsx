import CardAudio from "./CardAudio";

const ListaAudios = ({ audios, onEditar, onExcluir }) => {
  if (audios.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-petroleo">
          Nenhum áudio cadastrado
        </h3>

        <p className="mt-2 text-gray-500">
          Cadastre seu primeiro áudio para começar!
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {audios.map((audio) => (
        <CardAudio
          key={audio.id}
          audio={audio}
          onEditar={onEditar}
          onExcluir={onExcluir}
        />
      ))}
    </section>
  );
};

export default ListaAudios;
