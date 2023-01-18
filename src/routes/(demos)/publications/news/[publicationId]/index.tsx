import { component$, Resource } from '@builder.io/qwik'
import { type RequestHandler, useEndpoint, Link } from '@builder.io/qwik-city'
import { GraphQLClient } from 'graphql-request'
import { getSdk, type PublicationEntryFragment } from '@/api/generated/types'

export const onGet: RequestHandler = async ({ params }) => {
  const client = new GraphQLClient('http://localhost:56997/graphql')
  const sdk = getSdk(client)
  const data = await sdk.Publication({ data: { id: Number(params.publicationId) } })
  return data.publication
}

export default component$(() => {
  const publication = useEndpoint<PublicationEntryFragment>()
  return (
    <div>
      <Resource
        value={publication}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(publication) => (
          <div>
            <div class="text-xl mb-3">
              {publication.title}
            </div>
            <div class="font-bold my-1">
              Sections:
            </div>
            <div class="flex flex-wrap gap-1 mb-3">
              {publication?.sections?.map((section) => (
                <span class="p-1 bg-slate-200 rounded">
                  {section.name}
                </span>
              ))}
            </div>
            <div class="font-bold my-1">
              Tags:
            </div>
            <div class="flex flex-wrap gap-1 mb-3">
              {publication?.tags?.map((tag) => (
                <span class="p-1 bg-slate-200 rounded">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      />
      <Link href="/publications/" class="qw-link">
        Back to Publication List
      </Link>
    </div>
  )
})
