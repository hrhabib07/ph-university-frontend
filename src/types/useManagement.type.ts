export type TUser = {
  _id: string;
  id: string;
  email: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
};

export type TAdmissionSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademicDepartment = {
  _id: string;
  name: string;
  academicFaculty: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TStudent = {
  _id: string;
  id: string;
  user: TUser;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  admissionSemester: TAdmissionSemester;
  isDeleted: boolean;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  fullName: string;
};

export type TAdmin = {
  password: string;
  admin: {
    designation: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    gender: string;
    dateOfBirth: string; // Consider using Date if you want to handle it as a Date object
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    profileImage: string;
    managementDepartment: string;
    profileImg: string;
    bloogGroup: string;
    idDeleted: boolean;
  };
};

export type TFaculty = {
  password: string; // Ideally, this should be hashed
  faculty: {
    designation: string; // e.g., "Assistant Professor"
    name: {
      firstName: string;
      middleName?: string; // Optional property
      lastName: string;
    };
    gender: "male" | "female" | "other"; // Assuming gender is one of these options
    dateOfBirth: string; // ISO date string, e.g., "1975-08-15T00:00:00.000Z"
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloogGroup?: string; // Optional property
    presentAddress: string;
    permanentAddress: string;
    profileImg?: string; // Optional property, URL to profile image
    academicDepartment: string; // Assuming it's an ID or code
    isDeleted: boolean;
  };
};
