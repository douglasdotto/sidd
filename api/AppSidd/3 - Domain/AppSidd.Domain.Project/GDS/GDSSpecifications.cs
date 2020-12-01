using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class GDSSpecifications : List<SpecificationBase<GDS>>
    {
        public GDSSpecifications()
        {
            AddRange(new List<SpecificationBase<GDS>>() {
            });
        }
    }
}