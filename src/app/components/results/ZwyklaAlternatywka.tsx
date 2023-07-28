import Image from "next/image"

export default function ZwyklaAlternatywka() {
    return (
        <div>
            <h2>Zwykła alternatywka</h2>
            <Image src="/alternatywka.jpeg" alt="Zwykła alternatywka" width={500} height={500} />
            <p>Jesteś Alternatywką w swojej najczystszej formie! Noize rockowy koncert czy gorzkie piwa kraftowe nie są Ci straszne bo na pewno nie idziesz głównym nurtem. Może się okazać że dla niektórych jest to nienormalne, ale nie boisz się temu sprostać, bo na tym właśnie polega bycie alternatywnym!</p>
        </div>
    )
}