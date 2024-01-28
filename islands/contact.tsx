import { useCallback, useState } from "preact/hooks";
import { Translation } from "../utils/types.ts";

const Contact = (data: { translation: Translation["contact"] }) => {
  const [status, setStatus] = useState<"sending" | "sent" | "failed">();
  const [form, setForm] = useState({
    mail: "",
    tel: "",
    message: "",
  });
  const submit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      try {
        setStatus("sending");
        const response = await fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify({
            mail: form.mail,
            message: form.message,
            tel: form.tel,
          }),
        });
        if (response.status !== 200) throw Error;
        setStatus("sent");
      } catch (e) {
        setStatus("failed");
      }
    },
    [form],
  );

  return (
    <>
      <h3>{data.translation.title}</h3>
      <div>
        {status === "sent"
          ? <h3>{data.translation.sent}</h3>
          : (
            <form onSubmit={submit} className="space-y-3">
              {status === "failed" && <h3>{data.translation.failed}</h3>}
              <div className="space-y-1">
                <label for="mail">{data.translation.mail}</label>

                <input
                  type="text"
                  id="mail"
                  name="mail"
                  className="w-full rounded-xl  p-1 bg-gray-dark text-gray-light outline-none"
                  required
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  onInput={(e) => {
                    setForm((current) => ({
                      ...current,
                      mail: e.currentTarget.value,
                    }));
                  }}
                />
              </div>
              <div className="space-y-1">
                <label for="tel">{data.translation.tel}</label>

                <input
                  type="text"
                  id="tel"
                  name="tel"
                  className="w-full rounded-xl  p-1 bg-gray-dark text-gray-light outline-none"
                  required
                  pattern="[^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
                  onInput={(e) => {
                    setForm((current) => ({
                      ...current,
                      tel: e.currentTarget.value,
                    }));
                  }}
                />
              </div>
              <div className="space-y-1">
                <label for="message">{data.translation.message}</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full resize-none rounded-xl h-15  p-1 bg-gray-dark text-gray-light outline-none"
                  required
                  onInput={(e) => {
                    setForm((current) => ({
                      ...current,
                      message: e.currentTarget.value,
                    }));
                  }}
                >
                </textarea>
              </div>
              {status === "sending"
                ? (
                  <div class="h-2 w-10 flex items-center">
                    <img src="/vectors/loader.svg" class="w-full" />
                  </div>
                )
                : (
                  <input
                    type="submit"
                    className="rounded-xl px-5 py-1 bg-gray-dark text-gray-light cursor-pointer transition-colors border-2 border-transparent hover:border-gray-light"
                    value={data.translation.send}
                  />
                )}
            </form>
          )}
      </div>
    </>
  );
};
export default Contact;
