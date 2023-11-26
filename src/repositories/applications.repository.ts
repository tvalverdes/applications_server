import { Application } from '../types'

export interface ApplicationRepository {
	getById(id: string): Promise<Application | null>
}