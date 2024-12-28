import React from 'react'

function CardList({actor}) {
    
    console.log(actor.role);
  return (
    <>
        <div class="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={actor.image} />
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-1.5">
                    <p class="text-lg text-black font-semibold">
                   {actor.name}
                    </p>
                    <p class="text-sm text-purple-700 font-small">
                   Role : {actor.role}
                    </p>
                </div>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
            </div>
        </div>
    </>
  )
}

export default CardList