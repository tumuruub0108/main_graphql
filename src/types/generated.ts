import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '$/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
  Void: undefined;
};

export const AcademicDegree = {
  Bachelor: 'Bachelor',
  Doctor: 'Doctor',
  Master: 'Master'
} as const;

export type AcademicDegree = typeof AcademicDegree[keyof typeof AcademicDegree];
export const AccountStatus = {
  Active: 'Active',
  Inactive: 'Inactive'
} as const;

export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];
export type CreateSiteEmployeeInput = {
  academicDegree?: InputMaybe<AcademicDegree>;
  accountStatus?: InputMaybe<AccountStatus>;
  contractorCompanyName?: InputMaybe<Scalars['String']>;
  contractorDepartment?: InputMaybe<Scalars['String']>;
  contractorJobTitle?: InputMaybe<Scalars['String']>;
  cv?: InputMaybe<Scalars['String']>;
  dateOfBirth: Scalars['Date'];
  diplomaFile?: InputMaybe<Scalars['String']>;
  diplomaId: Scalars['String'];
  email: Scalars['String'];
  emergencyPhone?: InputMaybe<Scalars['String']>;
  fda1572Form?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  gcpCertificate?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  homeAddress?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  phone: Scalars['String'];
  proExpiryDate?: InputMaybe<Scalars['DateTime']>;
  proLicenseFile?: InputMaybe<Scalars['String']>;
  proLicenseId?: InputMaybe<Scalars['String']>;
  proLicenseName?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  registrationId: Scalars['String'];
  role: SiteEmployeeRole;
  siteId: Scalars['String'];
  specialties: Array<CreateSiteEmployeeSpecialtyInput>;
  systemStatus?: InputMaybe<SystemStatus>;
  type?: InputMaybe<SiteEmployeeType>;
  workingStatus?: InputMaybe<WorkingStatus>;
};

export type CreateSiteEmployeeSpecialtyInput = {
  certificationFile?: InputMaybe<Scalars['String']>;
  certificationId?: InputMaybe<Scalars['String']>;
  specialty: Scalars['String'];
};

export type CreateSiteInput = {
  abbreviation: Scalars['String'];
  address?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  district: Scalars['String'];
  email: Scalars['String'];
  laboratoryType: SiteLaboratoryType;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
  status: SiteStatus;
  type: SiteType;
  zipCode: Scalars['String'];
};

export type CreateSponsorEmployeeInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  dateOfBirth: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String'];
  phone: Scalars['String'];
  profile?: InputMaybe<Scalars['String']>;
  role: SponsorEmployeeRole;
  sponsorId: Scalars['String'];
  systemStatus?: InputMaybe<SystemStatus>;
};

export type CreateSponsorInput = {
  abbreviation: Scalars['String'];
  address?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  district: Scalars['String'];
  email: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
  type: SponsorType;
  zipCode: Scalars['String'];
};

export type CreateStudyInput = {
  class: Scalars['String'];
  name: Scalars['String'];
  protocolId: Scalars['String'];
  sponsorId: Scalars['String'];
  subClass: Scalars['String'];
};

export type Employee = {
  __typename?: 'Employee';
  dateOfBirth: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
};

export const Gender = {
  Female: 'Female',
  Male: 'Male',
  Other: 'Other'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];
export type Mutation = {
  __typename?: 'Mutation';
  createSite: SuccessResponse;
  createSiteEmployee: SuccessResponse;
  createSponsor: SuccessResponse;
  createSponsorEmployee: SuccessResponse;
  createStudy: SuccessResponse;
  deleteSite: SuccessResponse;
  deleteSiteEmployee: SuccessResponse;
  deleteSponsor: SuccessResponse;
  deleteSponsorEmployee: SuccessResponse;
  deleteStudy: SuccessResponse;
  updateSite: SuccessResponse;
  updateSiteEmployee: SuccessResponse;
  updateSponsor: SuccessResponse;
  updateSponsorEmployee: SuccessResponse;
  updateStudy: SuccessResponse;
};


export type MutationCreateSiteArgs = {
  input: CreateSiteInput;
};


export type MutationCreateSiteEmployeeArgs = {
  input: CreateSiteEmployeeInput;
};


export type MutationCreateSponsorArgs = {
  input: CreateSponsorInput;
};


export type MutationCreateSponsorEmployeeArgs = {
  input: CreateSponsorEmployeeInput;
};


export type MutationCreateStudyArgs = {
  input: CreateStudyInput;
};


export type MutationDeleteSiteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSiteEmployeeArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteSponsorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSponsorEmployeeArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteStudyArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateSiteArgs = {
  id: Scalars['ID'];
  input: UpdateSiteInput;
};


export type MutationUpdateSiteEmployeeArgs = {
  id: Scalars['Int'];
  input: UpdateSiteEmployeeInput;
};


export type MutationUpdateSponsorArgs = {
  id: Scalars['ID'];
  input: UpdateSponsorInput;
};


export type MutationUpdateSponsorEmployeeArgs = {
  id: Scalars['Int'];
  input: UpdateSponsorEmployeeInput;
};


export type MutationUpdateStudyArgs = {
  id: Scalars['ID'];
  input: UpdateStudyInput;
};

export type Query = {
  __typename?: 'Query';
  getEmployee: Employee;
  getSite: Site;
  getSiteEmployee: SiteEmployee;
  getSponsor: Sponsor;
  getSponsorEmployee: SponsorEmployee;
  getStudy: Study;
  listSite: Array<Maybe<Site>>;
  listSiteEmployee: Array<Maybe<SiteEmployee>>;
  listSponsor: Array<Sponsor>;
  listSponsorEmployee: Array<SponsorEmployee>;
  listStudy: Array<Study>;
};


export type QueryGetEmployeeArgs = {
  email: Scalars['String'];
};


export type QueryGetSiteArgs = {
  id: Scalars['ID'];
};


export type QueryGetSiteEmployeeArgs = {
  id: Scalars['Int'];
};


export type QueryGetSponsorArgs = {
  id: Scalars['ID'];
};


export type QueryGetSponsorEmployeeArgs = {
  id: Scalars['Int'];
};


export type QueryGetStudyArgs = {
  id: Scalars['ID'];
};

export type Site = {
  __typename?: 'Site';
  abbreviation: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  district: Scalars['String'];
  email: Scalars['String'];
  employees?: Maybe<Array<Maybe<SiteEmployee>>>;
  id: Scalars['ID'];
  laboratoryType: SiteLaboratoryType;
  location?: Maybe<Scalars['String']>;
  monitors?: Maybe<Array<Maybe<SponsorEmployee>>>;
  name: Scalars['String'];
  phone: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  status: SiteStatus;
  studies?: Maybe<Array<Maybe<Study>>>;
  type: SiteType;
  zipCode: Scalars['String'];
};

export type SiteEmployee = {
  __typename?: 'SiteEmployee';
  academicDegree?: Maybe<AcademicDegree>;
  accountStatus?: Maybe<AccountStatus>;
  contractorCompanyName?: Maybe<Scalars['String']>;
  contractorDepartment?: Maybe<Scalars['String']>;
  contractorJobTitle?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  cv?: Maybe<Scalars['String']>;
  dateOfBirth: Scalars['Date'];
  diplomaFile?: Maybe<Scalars['String']>;
  diplomaId: Scalars['String'];
  email: Scalars['String'];
  emergencyPhone?: Maybe<Scalars['String']>;
  fda1572Form?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gcpCertificate?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  homeAddress?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  proExpiryDate?: Maybe<Scalars['DateTime']>;
  proLicenseFile?: Maybe<Scalars['String']>;
  proLicenseId?: Maybe<Scalars['String']>;
  proLicenseName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  registrationId: Scalars['String'];
  role: SiteEmployeeRole;
  site?: Maybe<Site>;
  siteId: Scalars['String'];
  specialties?: Maybe<Array<Maybe<SiteEmployeeSpecialty>>>;
  systemStatus?: Maybe<SystemStatus>;
  type?: Maybe<SiteEmployeeType>;
  workingStatus?: Maybe<WorkingStatus>;
};

export const SiteEmployeeRole = {
  Accountant: 'Accountant',
  ClinicalPathologist: 'ClinicalPathologist',
  ClinicalResearchCoordinator: 'ClinicalResearchCoordinator',
  ImageUploader: 'ImageUploader',
  ImageUploaderAndReader: 'ImageUploaderAndReader',
  LaboratorySampleCollector: 'LaboratorySampleCollector',
  LaboratoryScientist: 'LaboratoryScientist',
  LaboratoryTechnician: 'LaboratoryTechnician',
  PhysicianResearchAssistant: 'PhysicianResearchAssistant',
  PrincipalInvestigator: 'PrincipalInvestigator'
} as const;

export type SiteEmployeeRole = typeof SiteEmployeeRole[keyof typeof SiteEmployeeRole];
export type SiteEmployeeSpecialty = {
  __typename?: 'SiteEmployeeSpecialty';
  certificationFile?: Maybe<Scalars['String']>;
  certificationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  specialty: Scalars['String'];
};

export const SiteEmployeeType = {
  ContractWorker: 'ContractWorker',
  Employee: 'Employee'
} as const;

export type SiteEmployeeType = typeof SiteEmployeeType[keyof typeof SiteEmployeeType];
export const SiteLaboratoryType = {
  CentralLab: 'CentralLab',
  LocalLab: 'LocalLab',
  WithoutLab: 'WithoutLab'
} as const;

export type SiteLaboratoryType = typeof SiteLaboratoryType[keyof typeof SiteLaboratoryType];
export const SiteStatus = {
  Active: 'Active',
  Inactive: 'Inactive'
} as const;

export type SiteStatus = typeof SiteStatus[keyof typeof SiteStatus];
export const SiteType = {
  Hospital: 'Hospital',
  ResearchInstitute: 'ResearchInstitute'
} as const;

export type SiteType = typeof SiteType[keyof typeof SiteType];
export type Sponsor = {
  __typename?: 'Sponsor';
  abbreviation?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employees?: Maybe<Array<SponsorEmployee>>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  studies?: Maybe<Array<Study>>;
  type?: Maybe<SponsorType>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SponsorEmployee = {
  __typename?: 'SponsorEmployee';
  accountStatus: AccountStatus;
  createdAt: Scalars['DateTime'];
  dateOfBirth: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  role: SponsorEmployeeRole;
  sites?: Maybe<Array<Maybe<Site>>>;
  sponsor?: Maybe<Sponsor>;
  sponsorId: Scalars['String'];
  systemStatus: SystemStatus;
};

export const SponsorEmployeeRole = {
  ClinicalPathologist: 'ClinicalPathologist',
  Monitor: 'Monitor'
} as const;

export type SponsorEmployeeRole = typeof SponsorEmployeeRole[keyof typeof SponsorEmployeeRole];
export const SponsorType = {
  PharmaceuticalIndustry: 'PharmaceuticalIndustry',
  ResearchInstitution: 'ResearchInstitution',
  University: 'University'
} as const;

export type SponsorType = typeof SponsorType[keyof typeof SponsorType];
export type Study = {
  __typename?: 'Study';
  class: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  protocolId: Scalars['String'];
  sites?: Maybe<Array<Site>>;
  sponsor?: Maybe<Sponsor>;
  sponsorId: Scalars['String'];
  subClass: Scalars['String'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success: Scalars['Boolean'];
};

export const SystemStatus = {
  Available: 'Available',
  BeRightBack: 'BeRightBack',
  DoNotDisturb: 'DoNotDisturb',
  Offline: 'Offline'
} as const;

export type SystemStatus = typeof SystemStatus[keyof typeof SystemStatus];
export type UpdateSiteEmployeeInput = {
  academicDegree?: InputMaybe<AcademicDegree>;
  accountStatus?: InputMaybe<AccountStatus>;
  contractorCompanyName?: InputMaybe<Scalars['String']>;
  contractorDepartment?: InputMaybe<Scalars['String']>;
  contractorJobTitle?: InputMaybe<Scalars['String']>;
  cv?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  diplomaFile?: InputMaybe<Scalars['String']>;
  diplomaId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emergencyPhone?: InputMaybe<Scalars['String']>;
  fda1572Form?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gcpCertificate?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  homeAddress?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  proExpiryDate?: InputMaybe<Scalars['DateTime']>;
  proLicenseFile?: InputMaybe<Scalars['String']>;
  proLicenseId?: InputMaybe<Scalars['String']>;
  proLicenseName?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  registrationId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<SiteEmployeeRole>;
  siteId?: InputMaybe<Scalars['String']>;
  specialties?: InputMaybe<Array<CreateSiteEmployeeSpecialtyInput>>;
  systemStatus?: InputMaybe<SystemStatus>;
  type?: InputMaybe<SiteEmployeeType>;
  workingStatus?: InputMaybe<WorkingStatus>;
};

export type UpdateSiteInput = {
  abbreviation?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  laboratoryType?: InputMaybe<SiteLaboratoryType>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SiteStatus>;
  type?: InputMaybe<SiteType>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateSponsorEmployeeInput = {
  accountStatus?: InputMaybe<AccountStatus>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<SponsorEmployeeRole>;
  sponsorId?: InputMaybe<Scalars['String']>;
  systemStatus?: InputMaybe<SystemStatus>;
};

export type UpdateSponsorInput = {
  abbreviation?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SponsorType>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateStudyInput = {
  class?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  protocolId?: InputMaybe<Scalars['String']>;
  sponsorId?: InputMaybe<Scalars['String']>;
  subClass?: InputMaybe<Scalars['String']>;
};

export const WorkingStatus = {
  InVacation: 'InVacation',
  NotWorking: 'NotWorking',
  Working: 'Working'
} as const;

export type WorkingStatus = typeof WorkingStatus[keyof typeof WorkingStatus];
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AcademicDegree: AcademicDegree;
  AccountStatus: AccountStatus;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateSiteEmployeeInput: CreateSiteEmployeeInput;
  CreateSiteEmployeeSpecialtyInput: CreateSiteEmployeeSpecialtyInput;
  CreateSiteInput: CreateSiteInput;
  CreateSponsorEmployeeInput: CreateSponsorEmployeeInput;
  CreateSponsorInput: CreateSponsorInput;
  CreateStudyInput: CreateStudyInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Employee: ResolverTypeWrapper<Employee>;
  Gender: Gender;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Site: ResolverTypeWrapper<Site>;
  SiteEmployee: ResolverTypeWrapper<SiteEmployee>;
  SiteEmployeeRole: SiteEmployeeRole;
  SiteEmployeeSpecialty: ResolverTypeWrapper<SiteEmployeeSpecialty>;
  SiteEmployeeType: SiteEmployeeType;
  SiteLaboratoryType: SiteLaboratoryType;
  SiteStatus: SiteStatus;
  SiteType: SiteType;
  Sponsor: ResolverTypeWrapper<Sponsor>;
  SponsorEmployee: ResolverTypeWrapper<SponsorEmployee>;
  SponsorEmployeeRole: SponsorEmployeeRole;
  SponsorType: SponsorType;
  String: ResolverTypeWrapper<Scalars['String']>;
  Study: ResolverTypeWrapper<Study>;
  SuccessResponse: ResolverTypeWrapper<SuccessResponse>;
  SystemStatus: SystemStatus;
  UpdateSiteEmployeeInput: UpdateSiteEmployeeInput;
  UpdateSiteInput: UpdateSiteInput;
  UpdateSponsorEmployeeInput: UpdateSponsorEmployeeInput;
  UpdateSponsorInput: UpdateSponsorInput;
  UpdateStudyInput: UpdateStudyInput;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  WorkingStatus: WorkingStatus;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateSiteEmployeeInput: CreateSiteEmployeeInput;
  CreateSiteEmployeeSpecialtyInput: CreateSiteEmployeeSpecialtyInput;
  CreateSiteInput: CreateSiteInput;
  CreateSponsorEmployeeInput: CreateSponsorEmployeeInput;
  CreateSponsorInput: CreateSponsorInput;
  CreateStudyInput: CreateStudyInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Employee: Employee;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Site: Site;
  SiteEmployee: SiteEmployee;
  SiteEmployeeSpecialty: SiteEmployeeSpecialty;
  Sponsor: Sponsor;
  SponsorEmployee: SponsorEmployee;
  String: Scalars['String'];
  Study: Study;
  SuccessResponse: SuccessResponse;
  UpdateSiteEmployeeInput: UpdateSiteEmployeeInput;
  UpdateSiteInput: UpdateSiteInput;
  UpdateSponsorEmployeeInput: UpdateSponsorEmployeeInput;
  UpdateSponsorInput: UpdateSponsorInput;
  UpdateStudyInput: UpdateStudyInput;
  Void: Scalars['Void'];
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EmployeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = ResolversObject<{
  dateOfBirth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createSite?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationCreateSiteArgs, 'input'>>;
  createSiteEmployee?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationCreateSiteEmployeeArgs, 'input'>>;
  createSponsor?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationCreateSponsorArgs, 'input'>>;
  createSponsorEmployee?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationCreateSponsorEmployeeArgs, 'input'>>;
  createStudy?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationCreateStudyArgs, 'input'>>;
  deleteSite?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationDeleteSiteArgs, 'id'>>;
  deleteSiteEmployee?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationDeleteSiteEmployeeArgs, 'id'>>;
  deleteSponsor?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationDeleteSponsorArgs, 'id'>>;
  deleteSponsorEmployee?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationDeleteSponsorEmployeeArgs, 'id'>>;
  deleteStudy?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationDeleteStudyArgs, 'id'>>;
  updateSite?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationUpdateSiteArgs, 'id' | 'input'>>;
  updateSiteEmployee?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationUpdateSiteEmployeeArgs, 'id' | 'input'>>;
  updateSponsor?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationUpdateSponsorArgs, 'id' | 'input'>>;
  updateSponsorEmployee?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationUpdateSponsorEmployeeArgs, 'id' | 'input'>>;
  updateStudy?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<MutationUpdateStudyArgs, 'id' | 'input'>>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getEmployee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType, RequireFields<QueryGetEmployeeArgs, 'email'>>;
  getSite?: Resolver<ResolversTypes['Site'], ParentType, ContextType, RequireFields<QueryGetSiteArgs, 'id'>>;
  getSiteEmployee?: Resolver<ResolversTypes['SiteEmployee'], ParentType, ContextType, RequireFields<QueryGetSiteEmployeeArgs, 'id'>>;
  getSponsor?: Resolver<ResolversTypes['Sponsor'], ParentType, ContextType, RequireFields<QueryGetSponsorArgs, 'id'>>;
  getSponsorEmployee?: Resolver<ResolversTypes['SponsorEmployee'], ParentType, ContextType, RequireFields<QueryGetSponsorEmployeeArgs, 'id'>>;
  getStudy?: Resolver<ResolversTypes['Study'], ParentType, ContextType, RequireFields<QueryGetStudyArgs, 'id'>>;
  listSite?: Resolver<Array<Maybe<ResolversTypes['Site']>>, ParentType, ContextType>;
  listSiteEmployee?: Resolver<Array<Maybe<ResolversTypes['SiteEmployee']>>, ParentType, ContextType>;
  listSponsor?: Resolver<Array<ResolversTypes['Sponsor']>, ParentType, ContextType>;
  listSponsorEmployee?: Resolver<Array<ResolversTypes['SponsorEmployee']>, ParentType, ContextType>;
  listStudy?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType>;
}>;

export type SiteResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = ResolversObject<{
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  district?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  employees?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteEmployee']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  laboratoryType?: Resolver<ResolversTypes['SiteLaboratoryType'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['SponsorEmployee']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SiteStatus'], ParentType, ContextType>;
  studies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Study']>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SiteType'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteEmployeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SiteEmployee'] = ResolversParentTypes['SiteEmployee']> = ResolversObject<{
  academicDegree?: Resolver<Maybe<ResolversTypes['AcademicDegree']>, ParentType, ContextType>;
  accountStatus?: Resolver<Maybe<ResolversTypes['AccountStatus']>, ParentType, ContextType>;
  contractorCompanyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contractorDepartment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contractorJobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  cv?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  diplomaFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diplomaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emergencyPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fda1572Form?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gcpCertificate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  homeAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proExpiryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  proLicenseFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proLicenseId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proLicenseName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['SiteEmployeeRole'], ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialties?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteEmployeeSpecialty']>>>, ParentType, ContextType>;
  systemStatus?: Resolver<Maybe<ResolversTypes['SystemStatus']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SiteEmployeeType']>, ParentType, ContextType>;
  workingStatus?: Resolver<Maybe<ResolversTypes['WorkingStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteEmployeeSpecialtyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SiteEmployeeSpecialty'] = ResolversParentTypes['SiteEmployeeSpecialty']> = ResolversObject<{
  certificationFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  certificationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SponsorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Sponsor'] = ResolversParentTypes['Sponsor']> = ResolversObject<{
  abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employees?: Resolver<Maybe<Array<ResolversTypes['SponsorEmployee']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  studies?: Resolver<Maybe<Array<ResolversTypes['Study']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SponsorType']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SponsorEmployeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SponsorEmployee'] = ResolversParentTypes['SponsorEmployee']> = ResolversObject<{
  accountStatus?: Resolver<ResolversTypes['AccountStatus'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['SponsorEmployeeRole'], ParentType, ContextType>;
  sites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Site']>>>, ParentType, ContextType>;
  sponsor?: Resolver<Maybe<ResolversTypes['Sponsor']>, ParentType, ContextType>;
  sponsorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StudyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Study'] = ResolversParentTypes['Study']> = ResolversObject<{
  class?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protocolId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sites?: Resolver<Maybe<Array<ResolversTypes['Site']>>, ParentType, ContextType>;
  sponsor?: Resolver<Maybe<ResolversTypes['Sponsor']>, ParentType, ContextType>;
  sponsorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subClass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuccessResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SuccessResponse'] = ResolversParentTypes['SuccessResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = Context> = ResolversObject<{
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Employee?: EmployeeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteEmployee?: SiteEmployeeResolvers<ContextType>;
  SiteEmployeeSpecialty?: SiteEmployeeSpecialtyResolvers<ContextType>;
  Sponsor?: SponsorResolvers<ContextType>;
  SponsorEmployee?: SponsorEmployeeResolvers<ContextType>;
  Study?: StudyResolvers<ContextType>;
  SuccessResponse?: SuccessResponseResolvers<ContextType>;
  Void?: GraphQLScalarType;
}>;

