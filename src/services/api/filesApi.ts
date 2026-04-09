/** Stubbed — not needed for local code generation. */

export type File = {
  fileId: string
  relativePath: string
}

export type FilesApiConfig = {
  oauthToken: string
  baseUrl?: string
  sessionId: string
}

export type DownloadResult = {
  fileId: string
  path: string
  success: boolean
  error?: string
  bytesWritten?: number
}

export type UploadResult =
  | { path: string; fileId: string; size: number; success: true }
  | { path: string; error: string; success: false }

export type FileMetadata = {
  filename: string
  fileId: string
  size: number
}

export async function downloadFile(
  _fileId: string,
  _config: FilesApiConfig,
): Promise<Buffer> {
  return Buffer.alloc(0)
}

export function buildDownloadPath(
  basePath: string,
  sessionId: string,
  relativePath: string,
): string | null {
  return null
}

export async function downloadAndSaveFile(
  _attachment: File,
  _config: FilesApiConfig,
): Promise<DownloadResult> {
  return { fileId: '', path: '', success: false, error: 'Stubbed' }
}

export async function downloadSessionFiles(
  _files: File[],
  _config: FilesApiConfig,
  _concurrency?: number,
): Promise<DownloadResult[]> {
  return []
}

export async function uploadFile(
  _filePath: string,
  _relativePath: string,
  _config: FilesApiConfig,
  _opts?: { signal?: AbortSignal },
): Promise<UploadResult> {
  return { path: '', error: 'Stubbed', success: false }
}

export async function uploadSessionFiles(
  _files: Array<{ path: string; relativePath: string }>,
  _config: FilesApiConfig,
  _concurrency?: number,
): Promise<UploadResult[]> {
  return []
}

export async function listFilesCreatedAfter(
  _afterCreatedAt: string,
  _config: FilesApiConfig,
): Promise<FileMetadata[]> {
  return []
}

export function parseFileSpecs(_fileSpecs: string[]): File[] {
  return []
}
