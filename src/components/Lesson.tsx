import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR  from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import ClassName from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={ClassName(`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors }`, {
        'bg-green-500' : isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
         {isLessonAvailable ? (
           <span className={ClassName('text-sm font-medium flex items-center gap-2',{
            'text-white' : isActiveLesson,
            'text-blue-500' : !isActiveLesson,
           })}>
           <CheckCircle size={ 20 }/>
            Conteúdo liberado
            </span>
         ) : (
          <span className={ClassName('text-sm text-orange-500 font-medium flex items-center gap-2',{
            'border-white' : isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}>
          <Lock size={ 20 } />
           Em breve
           </span>
         ) }
         
           <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
        </header>

        <strong className={ClassName('text-gray-200 mt-5 block', {
          'text-white' : isActiveLesson,
          'text-gray-200' : isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
    )
}