import { component$, Resource } from '@builder.io/qwik'
import { type RequestHandler, useEndpoint, Link } from '@builder.io/qwik-city'
import { GraphQLClient } from 'graphql-request'
import { getSdk, type PublicationListEntryFragment } from '@/api/generated/types'

export const onGet: RequestHandler = async () => {
  const client = new GraphQLClient('http://localhost:56997/graphql')
  const sdk = getSdk(client)
  const data = await sdk.Publications({ data: { } })
  return data.publications
}

export default component$(() => {
  const publications = useEndpoint<PublicationListEntryFragment[]>()
  console.log('publications', publications)
  return (
    <div>
      <div class="text-xl">
        Publications
      </div>
      <Resource
        value={publications}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(publications) => (
          <div>
            {publications && publications.map((publication) => (
              <div key={publication.id} class="my-3">
                <Link
                  href={'/publications/news/' + publication.id}
                  prefetch={false}
                  class="qw-link"
                >
                  {publication.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  )
})
