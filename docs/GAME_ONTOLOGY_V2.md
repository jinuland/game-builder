# Game Ontology v2 contract

Game Ontology v2 is the canonical semantic contract shared by GAME FORGE Web,
GraphRAG, Narrative Studio, the Local Companion, and Unity.

## Authority and projections

- DynamoDB stores project, branch, revision, proposal, decision, and job metadata.
- An immutable S3 object stores the complete ontology snapshot for every revision.
- Neptune stores a query projection. It is never the authority for an approved revision.
- Unity receives a signed Build Revision derived from one immutable ontology revision.

Every projection is addressable by `projectId`, `branch.id`, and `revision.id`.
An AI response or Unity synchronization that omits these identifiers cannot mutate
the canonical project.

Neptune projection identifiers include the immutable revision ID, so publishing a
new revision never overwrites the graph used to explain an earlier AI proposal or
Unity build. If Neptune is unavailable, deterministic bounded traversal over the
S3 snapshot remains the correctness fallback; semantic/vector ranking is an
enhancement and never changes the authoritative result.

## Layers

`domain` describes the game world and mechanics. `narrative` describes events,
conditions, effects, choices, quests, and endings. `implementation` maps approved
concepts to Unity scenes, prefabs, components, assets, tests, and build tasks.

The layers remain in one graph. A character is not copied into a story character
or a Unity character; relationships connect the same stable entity to narrative
and implementation nodes.

## Identity

- `id` is an immutable UUID used by storage and synchronization.
- `stableKey` is a project-local human-readable key used by generated assets.
- Names and descriptions may change without changing either identity.

## Revisions and branches

Every approved mutation creates a child revision. The revision records its parent,
branch, actor, source, timestamp, and message. Branches point to a base revision
and never overwrite the history of another branch.

## Ownership

- `Generated`: deterministic output that can be regenerated.
- `Managed`: automation may change it only after a preview and approval.
- `UserOwned`: automation cannot overwrite it.

## Migration

`migrateOntologyV1` deterministically maps legacy IDs to UUIDs, converts the
separate story list into `StoryBeat` nodes, and connects the legacy linear order
with `BRANCHES_TO` relationships. Re-running migration with identical inputs
produces identical graph identities.

## Validation gate

An ontology cannot become an approved revision while validation has an `error`.
Warnings can be accepted as explicit decisions. Build Revision publication has a
stricter gate that will later add story reachability and Unity implementation
checks.

## Storyline guard

Unity AI, the Local Companion, and bug-fix agents may create assets or change
implementation details, but every proposed local change is evaluated against the
exact Build Revision before any filesystem mutation. Changes are blocked when
they mutate approved domain/narrative nodes, remove an approved story binding,
target a `UserOwned` implementation, or use a stale revision. A blocked command
must produce a user-facing notification and can continue only after the semantic
change is approved as a new web revision.
