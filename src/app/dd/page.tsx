import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">TableGo</h3>
            <p className="text-sm text-muted-foreground">
              A maneira mais fácil de reservar sua mesa perfeita nos melhores restaurantes.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Imprensa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Para Restaurantes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Junte-se ao TableGo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Login de Restaurante
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Recursos para Parceiros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline">
                  Suporte para Negócios
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TableGo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}