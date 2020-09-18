namespace AppSidd.Domain.Users.Auth.JWT
{
    public static class Roles
    {
        public const string ROLE_ADMIN = "RoleAdmin";
        public const string ROLE_PATIENT = "RolePatient";
        public const string ROLE_MEDIC = "RoleMedic";
        public const string ROLE_ENF = "RoleEnf";
        public const string ROLE_TEC = "RoleTec";
        public const string ROLE_AGENT = "RoleAgent";

        public static (string Name, string Id) ROLE_ADMIN_CREATE = ("RoleAdmin", "23d9d409-d7aa-4966-9047-48c04b41f0a1".ToUpper());
        public static (string Name, string Id) ROLE_PATIENT_CREATE = ("RolePatient", "bcc9b822-766f-4f00-8a72-288fb78260ab".ToUpper());
        public static (string Name, string Id) ROLE_MEDIC_CREATE = ("RoleMedic", "f4ea9499-f2fd-464e-9039-a115177c887d".ToUpper());
        public static (string Name, string Id) ROLE_ENF_CREATE = ("RoleEnf", "84a9cf58-31f8-4c1b-bb08-e93813404c22".ToUpper());
        public static (string Name, string Id) ROLE_TEC_CREATE = ("RoleTec", "437d49c5-9c56-4e13-9e65-eb1bff27b0ca".ToUpper());
        public static (string Name, string Id) ROLE_AGENT_CREATE = ("RoleAgent", "53012aca-c557-4991-8538-f22c0450cc1f".ToUpper());
    }
}
