export const Regalos = () => {
  return (
    <section className="w-full mb-12 flex flex-col items-center">
      {/* Title */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
        <h3 className="text-3xl text-center text-lavender-dark font-bold font-serif">
          Regalos
        </h3>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-xl border border-lavender/20">
        {/* Dress Code Type */}
        <div className="text-center mb-8">
          <p className="text-lg text-lavender-dark">
            Tu presencia en nuestra boda es nuestro mayor regalo. Si deseas
            hacernos un obsequio adicional, te agradeceremos considerar una
            contribución a nuestra luna de miel, la cual atesoraremos con mucho
            cariño.
          </p>
        </div>

        <div>
          <div className="mb-8 text-center">
            <div className="space-y-4">
              <div className="text-lavender-dark text-lg flex flex-col gap-2">
                <span className="font-medium text-lavender-dark">
                  Numero de cuenta:
                </span>
                <input
                  className="font-medium text-lavender-dark mx-auto text-bold p-2 border border-lavender/30 rounded text-center w-128 bg-gray-100"
                  value="ES82 1465 0100 96 1764450134"
                  readOnly
                />
                <span className="font-medium text-lavender-dark">
                  Mauro Clemente
                </span>
              </div>
              {/* Important Notes */}
              <div className="   border-lavender/30 pt-6 mt-6">
                <div className="bg-cream/50 rounded-xl p-4 text-center">
                  <p className="text-forest-dark">
                    <span className="font-semibold">Nota importante:</span> Si
                    prefieres, puedes darnos un <strong>sobre</strong> el dia de
                    la boda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
