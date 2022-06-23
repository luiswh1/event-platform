import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import placeholder from '../assets/placeholder.png'

export function Event() {
  const { slug } = useParams<{slug: string}>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* TODO estilizar placeholder para quando não tiver video selecionado */}
        { slug ? <Video lessonSlug={ slug }/> : <img src={placeholder} className="flex-1" />}
        <Sidebar />
        {/* TODO criar component de footer */}
      </main>
    </div>
  )
}