import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdminCommandDto = {
  archive?: InputMaybe<Scalars['Int']>;
};

export type CommandResult = {
  __typename?: 'CommandResult';
  dt: Scalars['Int'];
  message1: Scalars['String'];
  message2: Scalars['String'];
  message3: Scalars['String'];
  type: CommandResultType;
};

export enum CommandResultType {
  Failed = 'failed',
  Success = 'success'
}

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  ip: Scalars['Int'];
  parentId: Scalars['Int'];
  rate: Scalars['Int'];
  status: CommentStatus;
  target?: Maybe<Publication>;
  targetId: Scalars['Int'];
  targetType: CommentTargetType;
  text: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
  userName: Scalars['String'];
  voices: Scalars['Int'];
};


export type CommentTargetArgs = {
  archive?: InputMaybe<Scalars['Boolean']>;
};

export enum CommentStatus {
  Approved = 'approved',
  Banned = 'banned',
  New = 'new'
}

export enum CommentTargetType {
  BlogPost = 'blog_post',
  Event = 'event',
  Message = 'message',
  New = 'new',
  Photonew = 'photonew',
  Video = 'video'
}

export type DeletePublicationDto = {
  id: Scalars['Int'];
};

export type GetCommentsDto = {
  cursor?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skipCurrentUser?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Array<CommentStatus>>;
  take?: InputMaybe<Scalars['Int']>;
  targetType?: InputMaybe<CommentTargetType>;
};

export type GetPublicationDto = {
  id: Scalars['Int'];
};

export type GetPublicationsDto = {
  archive?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skipCurrentUser?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Array<PublicationStatus>>;
  tagId?: InputMaybe<Scalars['Int']>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  take?: InputMaybe<Scalars['Int']>;
};

export type GetTagsDto = {
  cursor?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deletePublication: Publication;
  signOut: User;
  signinLocal: User;
  updateAnounces: CommandResult;
  updateCommentStatus: Comment;
  updatePublication: Publication;
};


export type MutationDeletePublicationArgs = {
  data: DeletePublicationDto;
};


export type MutationSigninLocalArgs = {
  data: SigninLocalDto;
};


export type MutationUpdateAnouncesArgs = {
  data: AdminCommandDto;
};


export type MutationUpdateCommentStatusArgs = {
  data: UpdateCommentStatusDto;
};


export type MutationUpdatePublicationArgs = {
  data: UpdatePublicationDto;
};

export type Publication = {
  __typename?: 'Publication';
  anounceImage: Scalars['String'];
  anounceText: Scalars['String'];
  archive?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Comment>>;
  commentsCount: Scalars['Int'];
  createdAt: Scalars['Int'];
  domain: Scalars['String'];
  format: Scalars['Float'];
  id: Scalars['Int'];
  publishedAt: Scalars['Int'];
  sections?: Maybe<Array<Section>>;
  status: PublicationStatus;
  tags?: Maybe<Array<Tag>>;
  text: Scalars['String'];
  title: Scalars['String'];
  type: PublicationType;
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export enum PublicationStatus {
  Draft = 'draft',
  Hidden = 'hidden',
  Publish = 'publish'
}

export enum PublicationType {
  Article = 'article',
  Help = 'help',
  Wiki = 'wiki'
}

export type Query = {
  __typename?: 'Query';
  comments: Array<Comment>;
  me: User;
  publication: Publication;
  publications: Array<Publication>;
  searchTags: Array<Tag>;
  sections: Array<Section>;
  tags: Array<Tag>;
};


export type QueryCommentsArgs = {
  data: GetCommentsDto;
};


export type QueryPublicationArgs = {
  data: GetPublicationDto;
};


export type QueryPublicationsArgs = {
  data: GetPublicationsDto;
};


export type QuerySearchTagsArgs = {
  data: SearchTagsDto;
};


export type QueryTagsArgs = {
  data: GetTagsDto;
};

export type SearchTagsDto = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search: Scalars['String'];
};

export type Section = {
  __typename?: 'Section';
  domain: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  parentId: Scalars['Int'];
  publications?: Maybe<Array<Publication>>;
  rank: Scalars['Int'];
};


export type SectionPublicationsArgs = {
  archive?: InputMaybe<Scalars['Boolean']>;
};

export type SigninLocalDto = {
  email: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
  publications?: Maybe<Array<Publication>>;
  publicationsCount: Scalars['Int'];
};


export type TagPublicationsArgs = {
  archive?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateCommentStatusDto = {
  id: Scalars['Int'];
  status: CommentStatus;
};

export type UpdatePublicationDto = {
  format: Scalars['Int'];
  id: Scalars['Int'];
  newTags: Array<Scalars['String']>;
  sections: Array<Scalars['Int']>;
  status: PublicationStatus;
  tags: Array<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Int'];
  email: Scalars['String'];
  id: Scalars['Int'];
  source: Scalars['String'];
  status: UserStatus;
  username: Scalars['String'];
};

export enum UserStatus {
  Admin = 'admin',
  Author = 'author',
  Editor = 'editor',
  User = 'user'
}

export type AuthUserFragment = { __typename?: 'User', id: number, username: string, email: string, status: UserStatus };

export type SigninLocalMutationVariables = Exact<{
  data: SigninLocalDto;
}>;


export type SigninLocalMutation = { __typename?: 'Mutation', signinLocal: { __typename?: 'User', id: number, username: string, email: string, status: UserStatus } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: { __typename?: 'User', id: number, username: string, email: string, status: UserStatus } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, username: string, email: string, status: UserStatus } };

export type CommentListEntryFragment = { __typename?: 'Comment', id: number, userId: number, userName: string, targetType: CommentTargetType, targetId: number, text: string, status: CommentStatus, createdAt: number, target?: { __typename?: 'Publication', id: number, title: string, domain: string } | null, user?: { __typename?: 'User', id: number, username: string, email: string, status: UserStatus } | null };

export type CommentTargetFragment = { __typename?: 'Publication', id: number, title: string, domain: string };

export type CommentUserFragment = { __typename?: 'User', id: number, username: string, email: string, status: UserStatus };

export type CommentsQueryVariables = Exact<{
  data: GetCommentsDto;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: number, userId: number, userName: string, targetType: CommentTargetType, targetId: number, text: string, status: CommentStatus, createdAt: number, target?: { __typename?: 'Publication', id: number, title: string, domain: string } | null, user?: { __typename?: 'User', id: number, username: string, email: string, status: UserStatus } | null }> };

export type UpdateCommentStatusMutationVariables = Exact<{
  data: UpdateCommentStatusDto;
}>;


export type UpdateCommentStatusMutation = { __typename?: 'Mutation', updateCommentStatus: { __typename?: 'Comment', id: number, status: CommentStatus } };

export type PublicationListEntryFragment = { __typename?: 'Publication', id: number, title: string, anounceText: string, anounceImage: string, domain: string, status: PublicationStatus, updatedAt: number, publishedAt: number, commentsCount: number };

export type PublicationEntryFragment = { __typename?: 'Publication', id: number, title: string, text: string, format: number, status: PublicationStatus, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, sections?: Array<{ __typename?: 'Section', id: number, parentId: number, name: string, rank: number }> | null };

export type PublicationsQueryVariables = Exact<{
  data: GetPublicationsDto;
}>;


export type PublicationsQuery = { __typename?: 'Query', publications: Array<{ __typename?: 'Publication', id: number, title: string, anounceText: string, anounceImage: string, domain: string, status: PublicationStatus, updatedAt: number, publishedAt: number, commentsCount: number }> };

export type PublicationQueryVariables = Exact<{
  data: GetPublicationDto;
}>;


export type PublicationQuery = { __typename?: 'Query', publication: { __typename?: 'Publication', id: number, title: string, text: string, format: number, status: PublicationStatus, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, sections?: Array<{ __typename?: 'Section', id: number, parentId: number, name: string, rank: number }> | null } };

export type UpdatePublicationMutationVariables = Exact<{
  data: UpdatePublicationDto;
}>;


export type UpdatePublicationMutation = { __typename?: 'Mutation', updatePublication: { __typename?: 'Publication', id: number, title: string, text: string, format: number, status: PublicationStatus, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, sections?: Array<{ __typename?: 'Section', id: number, parentId: number, name: string, rank: number }> | null } };

export type DeletePublicationMutationVariables = Exact<{
  data: DeletePublicationDto;
}>;


export type DeletePublicationMutation = { __typename?: 'Mutation', deletePublication: { __typename?: 'Publication', id: number, title: string, text: string, format: number, status: PublicationStatus, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, sections?: Array<{ __typename?: 'Section', id: number, parentId: number, name: string, rank: number }> | null } };

export type SectionEntryFragment = { __typename?: 'Section', id: number, parentId: number, name: string, rank: number };

export type SectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SectionsQuery = { __typename?: 'Query', sections: Array<{ __typename?: 'Section', id: number, parentId: number, name: string, rank: number }> };

export type TagEntryFragment = { __typename?: 'Tag', id: number, name: string };

export type TagsQueryVariables = Exact<{
  data: GetTagsDto;
}>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: number, name: string }> };

export type SearchTagsQueryVariables = Exact<{
  data: SearchTagsDto;
}>;


export type SearchTagsQuery = { __typename?: 'Query', searchTags: Array<{ __typename?: 'Tag', id: number, name: string }> };

export const AuthUserFragmentDoc = gql`
    fragment AuthUser on User {
  id
  username
  email
  status
}
    `;
export const CommentTargetFragmentDoc = gql`
    fragment CommentTarget on Publication {
  id
  title
  domain
}
    `;
export const CommentUserFragmentDoc = gql`
    fragment CommentUser on User {
  id
  username
  email
  status
}
    `;
export const CommentListEntryFragmentDoc = gql`
    fragment CommentListEntry on Comment {
  id
  userId
  userName
  targetType
  targetId
  text
  status
  createdAt
  target {
    ...CommentTarget
  }
  user {
    ...CommentUser
  }
}
    ${CommentTargetFragmentDoc}
${CommentUserFragmentDoc}`;
export const PublicationListEntryFragmentDoc = gql`
    fragment PublicationListEntry on Publication {
  id
  title
  anounceText
  anounceImage
  domain
  status
  updatedAt
  publishedAt
  commentsCount
}
    `;
export const TagEntryFragmentDoc = gql`
    fragment TagEntry on Tag {
  id
  name
}
    `;
export const SectionEntryFragmentDoc = gql`
    fragment SectionEntry on Section {
  id
  parentId
  name
  rank
}
    `;
export const PublicationEntryFragmentDoc = gql`
    fragment PublicationEntry on Publication {
  id
  title
  text
  format
  status
  tags {
    ...TagEntry
  }
  sections {
    ...SectionEntry
  }
}
    ${TagEntryFragmentDoc}
${SectionEntryFragmentDoc}`;
export const SigninLocalDocument = gql`
    mutation SigninLocal($data: SigninLocalDto!) {
  signinLocal(data: $data) {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export const SignOutDocument = gql`
    mutation SignOut {
  signOut {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export const MeDocument = gql`
    query Me {
  me {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export const CommentsDocument = gql`
    query Comments($data: GetCommentsDto!) {
  comments(data: $data) {
    ...CommentListEntry
  }
}
    ${CommentListEntryFragmentDoc}`;
export const UpdateCommentStatusDocument = gql`
    mutation UpdateCommentStatus($data: UpdateCommentStatusDto!) {
  updateCommentStatus(data: $data) {
    id
    status
  }
}
    `;
export const PublicationsDocument = gql`
    query Publications($data: GetPublicationsDto!) {
  publications(data: $data) {
    ...PublicationListEntry
  }
}
    ${PublicationListEntryFragmentDoc}`;
export const PublicationDocument = gql`
    query Publication($data: GetPublicationDto!) {
  publication(data: $data) {
    ...PublicationEntry
  }
}
    ${PublicationEntryFragmentDoc}`;
export const UpdatePublicationDocument = gql`
    mutation UpdatePublication($data: UpdatePublicationDto!) {
  updatePublication(data: $data) {
    ...PublicationEntry
  }
}
    ${PublicationEntryFragmentDoc}`;
export const DeletePublicationDocument = gql`
    mutation DeletePublication($data: DeletePublicationDto!) {
  deletePublication(data: $data) {
    ...PublicationEntry
  }
}
    ${PublicationEntryFragmentDoc}`;
export const SectionsDocument = gql`
    query Sections {
  sections {
    ...SectionEntry
  }
}
    ${SectionEntryFragmentDoc}`;
export const TagsDocument = gql`
    query Tags($data: GetTagsDto!) {
  tags(data: $data) {
    ...TagEntry
  }
}
    ${TagEntryFragmentDoc}`;
export const SearchTagsDocument = gql`
    query SearchTags($data: SearchTagsDto!) {
  searchTags(data: $data) {
    ...TagEntry
  }
}
    ${TagEntryFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SigninLocal(variables: SigninLocalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SigninLocalMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SigninLocalMutation>(SigninLocalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SigninLocal', 'mutation');
    },
    SignOut(variables?: SignOutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignOutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignOutMutation>(SignOutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignOut', 'mutation');
    },
    Me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Me', 'query');
    },
    Comments(variables: CommentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CommentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommentsQuery>(CommentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Comments', 'query');
    },
    UpdateCommentStatus(variables: UpdateCommentStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCommentStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCommentStatusMutation>(UpdateCommentStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateCommentStatus', 'mutation');
    },
    Publications(variables: PublicationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PublicationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublicationsQuery>(PublicationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Publications', 'query');
    },
    Publication(variables: PublicationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PublicationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublicationQuery>(PublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Publication', 'query');
    },
    UpdatePublication(variables: UpdatePublicationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatePublicationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePublicationMutation>(UpdatePublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdatePublication', 'mutation');
    },
    DeletePublication(variables: DeletePublicationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeletePublicationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePublicationMutation>(DeletePublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeletePublication', 'mutation');
    },
    Sections(variables?: SectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SectionsQuery>(SectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Sections', 'query');
    },
    Tags(variables: TagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagsQuery>(TagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Tags', 'query');
    },
    SearchTags(variables: SearchTagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchTagsQuery>(SearchTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchTags', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
