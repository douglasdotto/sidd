using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class UnitySpecifications : List<SpecificationBase<Unity>>
    {
        public UnitySpecifications()
        {
            AddRange(new List<SpecificationBase<Unity>>() {
            });
        }
    }
}